<template>
    <div >

        <van-nav-bar
            title="添加新闻"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />

        <van-form @submit="onSubmit">
                <van-field
                    v-model="title"
                    name="新闻标题"
                    label="新闻标题"
                    placeholder="新闻标题"
                    :rules="[{ required: true, message: '请填写新闻标题' }]"
                />
                <van-field
                    v-model="poster"
                    type=""
                    name="新闻封面"
                    label="新闻封面"
                    placeholder=""

                    
                />

                <van-uploader style="padding : 0.26667rem 0.42667rem;" :after-read="afterRead" v-model="fileList" :max-count="1" multiple />

                <van-field
                    v-model="author"
                    type=""
                    name="作者"
                    label="作者"
                    placeholder="作者"
                    
                />
                <van-field
                    v-model="content"
                    type=""
                    name="内容"
                    label="内容"
                    placeholder="内容"
                    style="height : 1rem"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                 </div>
        </van-form>

    </div>
</template>

<script>

import { Toast } from 'vant';
import { postNewsInfo, getNewsInfo } from '@/api/news';
import { uploadImg } from '@/api/common';

export default {
    name: 'addNews',
    components: {},
    data(){
        return {
            id : '',
            title: '',
            content: '',
            poster: '',
            author: '',
            fileList : []
        };
    },
    created() {
        this.getNewsDetail();
    },
    methods: {
        onClickLeft() {
            this.$router.push('/')
        },
        onClickRight() {
            Toast('按钮');
        },
        onSubmit(values) {
            let params = {
                title: this.title,
                content: this.content,
                poster: this.poster,
                author: this.author
            }   
            postNewsInfo(params).then(res => {
                console.log(res);
                if(res){
                    Toast('操作成功');
                    this.$router.push('/')
                }
            })
            
        },
        getNewsDetail() {
            console.log(this.$route.params.id)
            if(this.$route.params.id != '0'){
                this.id = this.$route.params.id
                getNewsInfo(this.id).then(res => {
                    console.log(res);
                })
            }
            
        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file.file);
            let formData = new FormData();
            formData.append('file', file.file);
            uploadImg(formData).then(response => {
                console.log(response);
            })
        }
        
    }
}
</script>