<template>
    <div class="profile-wrapper">
        <UserProfileInfo v-bind:user="this.user" v-on:alterar-dados="alterarDadosUser"/>
        <div>
            <router-link :to="{ name: 'Meus Cursos', params: { id: 1 } }">Os meus cursos</router-link>
            <div class="profile-list row">
                <UserProfileCourseCard v-for="course in this.courses" :key="course.id" v-bind:course="course"/>
            </div>
        </div>
        <div>
            <router-link :to="{ name: 'Meus Diplomas', params: { id: 1 } }">Os meus diplomas</router-link>
            <div class="profile-list row">
                <UserProfileDiplomaCard v-for="diploma in this.diplomas" :key="diploma.id" v-bind:diploma="diploma"/>
            </div>
        </div>
    </div>
</template>

<script>
import UserProfileInfo from '../components/profile/UserProfileInfo.vue'
import UserProfileCourseCard from '../components/profile/UserProfileCourseCard.vue'
import UserProfileDiplomaCard from '../components/profile/UserProfileDiplomaCard.vue'

export default {
    name: 'Profile',
    components: {
        UserProfileInfo,
        UserProfileCourseCard,
        UserProfileDiplomaCard
    },
    data(){
        return {
            user: {
                username: "",
                name: "",
                country: "",
                description: "",
                image: ""
            },
            courses: [],
            diplomas: []
        }
    },
    created(){
        this.user.username = "Amogus Sus",
        this.user.name = "Bruh ?"
        this.user.country = "Portugal"
        this.user.description = "Boa descrição bruvkek"
        this.user.image = "bingus"

        this.courses = [
            {
                id: 1,
                name: "Course 1",
                progress: 32,
                image: "bingus"
            },
            {
                id: 2,
                name: "Course 2",
                progress: 0,
                image: "bingus"
            },
            {
                id: 3,
                name: "Course 3",
                progress: 86,
                image: "bingus"
            }
        ]

        this.diplomas = [
            {
                id: 1,
                name: "Diploma 1",
                image: "bingus"
            },
            {
                id: 2,
                name: "Diploma 2",
                image: "bingus"
            },
            {
                id: 3,
                name: "Diploma 3",
                image: "bingus"
            },
            {
                id: 4,
                name: "Diploma 321",
                image: "bingus"
            }
        ]
    },
    methods: {
        alterarDadosUser() {
            //chamar backend pa alterar dados user
        }
    }
}
</script>

<style lang="scss" scoped>
    .row {
        margin: 0px;
    }
</style>