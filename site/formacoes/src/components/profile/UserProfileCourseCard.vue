<template>
    <router-link :to="{ name: 'Curso', params: { id: this.course.id } }" class="user-profile-course-card col-md-2">
        <img :src="this.imageUrl">
        <p>{{ this.course.name }}</p>
        <div>
            <progress id="progress" :value="this.course.progress" max="100"></progress>
            <p>{{ this.course.progress }} %</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'UserProfileCourseCard',
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            imageUrl: ""
        }
    },
    created(){
        this.imageUrl = new URL(`../../assets/${this.course.image}.jpg`, import.meta.url).href;
    }
}
</script>

<style lang="scss" scoped>
    .user-profile-course-card {
        padding: 16px;
    }

    img {
        height: 120px;
        width: 120px;
        object-fit: cover;
    }
</style>
