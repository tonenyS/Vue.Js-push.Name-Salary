new Vue({
    el:"#vue-app",
    data:{
        newData:{
            empName:'',
            salary:0
        },
        empGroup:[
            {
                empName:"Mahidon",
                salary:50000
            },
            {
                empName:"Nattapol",
                salary:60000
            }
        ]
    },
    methods: {
        addEmp:function(){
            this.empGroup.push({
                empName:this.newData.empName,
                salary:this.newData.salary
            });
            this.newData.empName = '';
            this.newData.salary = '0';
        }
    },
})