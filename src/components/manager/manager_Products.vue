<template lang='pug'>
div
  .text-right.mt-4
    button.btn.btn-primary(@click="openModal(true)") 建立新的產品
  table.table.mt-4
    thead
      tr
        th(width='120') 分類
        th 產品名稱
        th(width='120') 原價
        th(width='120') 售價
        th(width='100') 是否啟用
        th(width='80') 編輯
        th(width='80') 刪除
    tbody
      tr(v-for='(item) in products', :key='item.id')
        td {{ item.category}}
        td {{ item.title }}
        td.text-right
          | {{ item.origin_price | currency}}
        td.text-right
          | {{ item.price | currency}}
        td
          span.text-success(v-if='item.is_enabled') 啟用
          span(v-else='') 未啟用
        td
          button.btn.btn-outline-primary.btn-sm(@click='openModal(false, item)') 編輯
        td
          button.btn.btn-outline-danger.btn-sm(@click='openDel(item)') 刪除
    pagination(:page-data="pagination" @changepage="getProducts" class="d-flex justify-content-center")
    #productModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog.modal-lg(role='document')
        .modal-content.border-0
          .modal-header.bg-dark.text-white
            h5#exampleModalLabel.modal-title
              span 新增產品
          .modal-body
            .row
              .col-sm-4
                .form-group
                  label(for='image') 輸入圖片網址
                  input#image.form-control(type='text', v-model='tempProduct.imageUrl', placeholder='請輸入圖片連結')
                .form-group
                  label(for='customFile')
                    | 或 上傳圖片
                    i.fas.fa-spinner.fa-spin(v-if='status.fileUploading')
                  input#customFile.form-control(type='file', ref='files', @change="uploadFile")
                img.img-fluid(:src='tempProduct.imageUrl', alt='')
              .col-sm-8
                .form-group
                  label(for='title') 標題
                  input#title.form-control(type='text', v-model='tempProduct.title', placeholder='請輸入標題')
                .form-row
                  .form-group.col-md-6
                    label(for='category') 分類
                    input#category.form-control(type='text', v-model='tempProduct.category', placeholder='請輸入分類')
                  .form-group.col-md-6
                    label(for='price') 單位
                    input#unit.form-control(type='unit', v-model='tempProduct.unit', placeholder='請輸入單位')
                .form-row
                  .form-group.col-md-6
                    label(for='origin_price') 原價
                    input#origin_price.form-control(type='number', v-model='tempProduct.origin_price', placeholder='請輸入原價')
                  .form-group.col-md-6
                    label(for='price') 售價
                    input#price.form-control(type='number', v-model='tempProduct.price', placeholder='請輸入售價')
                hr
                .form-group
                  label(for='description') 產品描述
                  textarea#description.form-control(type='text', v-model='tempProduct.description', placeholder='請輸入產品描述')
                .form-group
                  label(for='content') 說明內容
                  textarea#content.form-control(type='text', v-model='tempProduct.content', placeholder='請輸入產品說明內容')
                .form-group
                  .form-check
                    input#is_enabled.form-check-input(type='checkbox', v-model='tempProduct.is_enabled', :true-value='1', :false-value='0')
                    label.form-check-label(for='is_enabled')
                      | 是否啟用
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-primary(type='button', @click='updateProduct') 確認
    #delProductModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span 刪除產品
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            | 是否刪除
            strong.text-danger {{ tempProduct.title }}
            |  商品(刪除後將無法恢復)。
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-danger(type='button', @click='deleteProduct') 確認刪除
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      status: {
        fileUploading: false
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      const vm = this
      vm.$store.dispatch('updateLoading', true)
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false)
        console.log(response.data)
        vm.products = response.data.products
        vm.pagination = response.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    openDel (item) {
      this.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    deleteProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          this.$store.dispatch('alertModules/updateMessage', { message: `刪除成功`, status: 'success' }, { root: true })
          $('#delProductModal').modal('hide')
          vm.getProducts()
        } else {
          this.$store.dispatch('alertModules/updateMessage', { message: `刪除失敗`, status: 'danger' }, { root: true })
        }
      })
    },
    updateProduct () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      const vm = this
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          this.$store.dispatch('alertModules/updateMessage', { message: `新增成功`, status: 'success' }, { root: true })
          $('#productModal').modal('hide')
          vm.getProducts()
        } else {
          this.$store.dispatch('alertModules/updateMessage', { message: `新增失敗`, status: 'danger' }, { root: true })
          $('#productModal').modal('hide')
          vm.getProducts()
          console.log('新增失敗')
        }
      })
    },
    uploadFile () {
      console.log(this)
      const uploadedFile = this.$refs.files.files[0]
      const vm = this
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.status.fileUploading = true
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        vm.status.fileUploading = false
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
        } else {
          this.$bus.$emit('messsage:push', response.data.message, 'danger')
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang='sass'>

</style>
