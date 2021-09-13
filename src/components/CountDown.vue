<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="clockdiv">
                    <div>
                        <span class="days day">{{calendarDays}}</span>
                    </div>
                </div>
                {{ $t('countdown.calendarDays') }}
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="clockdiv">
                    <div>
                        <span class="days day">{{workingDays}}</span>
                    </div>
                </div>
                {{ $t('countdown.workingDays') }}
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        props: ["calendarDays", "workingDays"],
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
    .col {
        margin-bottom: 0.5rem;
    }
    .clockdiv{
        font-family: sans-serif;
        color: #fff;
        display: inline-block;
        font-weight: 100;
        text-align: center;
        font-size: 30px;
    }
    .clockdiv > div{
        padding: 10px;
        border-radius: 3px;
        background: #00BF96;
        display: inline-block;
    }
    .clockdiv div > span{
        padding: 15px;
        border-radius: 3px;
        background: #00816A;
        display: inline-block;
    }
    smalltext{
        padding-top: 5px;
        font-size: 16px;
    }
</style>

