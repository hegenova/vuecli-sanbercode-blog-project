<template lang="">
    <!-- Pake keep alive supaya ter cache -->
      
    <keep-alive>
        <v-row justify='center'>

            <v-dialog
                v-model="dialogProp"
                persistent
                fullscreen overlay
                
            >
                <!-- Use dynamic component -->
                <component :is="dialogComponent" @closed='setDialogStatus'></component>
                <!-- <Login @closed='setDialogStatus'/> -->
            </v-dialog>
        
        </v-row>
    </keep-alive>
    
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    components:{
        Login : () => import('./Login.vue'),
        Register : ()=> import('./Register.vue')
    },
    computed:{
        ...mapGetters({
            dialogStatus : 'dialog/getStatus',
            dialogComponent : 'dialog/getComponent'
        }),
        dialogProp:{
            get(){
                return this.dialogStatus
            },
            set(value){
                this.setDialogStatus(value)
            }
        }
    },
    methods: {
        ...mapActions({
            'setDialogStatus' : 'dialog/setStatusAction'
        })
    },
}
</script>
<style lang="">
    
</style>