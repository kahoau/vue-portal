<template>
    <b-card
            :title="name"
            :img-src="imgSrc"
            v-b-modal="modalId"
            border-variant="secondary"
            img-width="100%"
            align="center"
            class="h-100">
        <!--
        <b-card-text>
            {{ desc }}
        </b-card-text>
        -->
        <!--
        <template v-slot:footer v-if="name">
            {{ name }}
        </template>
        -->
        <b-modal :id="modalId" :title="name" ok-only>
            <div class="modal-body">
                <img class="modal-img" :src="imgSrc"  alt="Responsive image">
                <p>{{ desc }}</p>
            </div>
        </b-modal>
    </b-card>
</template>

<script>
    export default {
        props: ["id", "name", "desc", "imgSrc"],
        computed: {
            modalId() {
                return `modal-${this.id}`;
            }
        },
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
    img {
        cursor: pointer;
    }

    .modal-img {
        width: 100%;
        height: 100%;
    }

    /*
    .card-columns .card {
      max-width: 25%;
    }

    .card-columns .card {
      max-width: calc(25% - 30px);
      display: inline-block;
    }
    */
    /*
    https://stackoverflow.com/questions/52584241/how-can-i-set-column-in-row-on-the-card-group-bootstrap-vue
    https://github.com/bootstrap-vue/bootstrap-vue/issues/5571
     */
</style>

