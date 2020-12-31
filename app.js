// var subject_count = 1;

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        subject_count: 1,
        grade: [],
        sumOfGrade: 0,
        sumOfCredit: 0,
        avgGrade: 0
    },
    methods: {
        addSubject: function () {
            this.subject_count++;
            this.createNewSubject()
            console.log(this.grade)
        },
        removeSubject: function (index) {
            this.subject_count--
            this.grade.splice(index, 1)
        },
        createNewSubject: function () {
            let temp = {
                // subject_id: this.subject_count,
                subject_name: null,
                credit: 1,
                grade: null
            }
            this.grade.push(temp)
        },
        calculateGrade: function () {
            let sumOfCredit = 0
            let sumOfGrade = 0
            for (let index = 0; index < this.grade.length; index++) {
                // const element = array[index];
                if (this.grade[index].grade != null) {
                    sumOfCredit -= -(this.grade[index].credit)
                    sumOfGrade -= -(this.grade[index].credit * this.grade[index].grade)
                }
            }
            console.log("sumC" + sumOfCredit);
            console.log("sumG" + sumOfGrade);

            this.sumOfCredit = sumOfCredit
            this.sumOfGrade = sumOfGrade
            this.avgGrade = sumOfGrade / sumOfCredit
            console.log(this.avgGrade);
        }
    },
    watch: {
        grade: {
            handler: function () {
                let sumOfCredit = 0
                let sumOfGrade = 0
                for (let index = 0; index < this.grade.length; index++) {
                    // const element = array[index];
                    if (this.grade[index].grade != null) {
                        sumOfCredit -= -(this.grade[index].credit)
                        sumOfGrade -= -(this.grade[index].credit * this.grade[index].grade)
                    }
                }
                console.log("sumC" + sumOfCredit);
                console.log("sumG" + sumOfGrade);

                this.sumOfCredit = sumOfCredit
                this.sumOfGrade = sumOfGrade
                this.avgGrade = sumOfGrade / sumOfCredit
                console.log(this.avgGrade);
            },
            deep: true
        }
    }
})