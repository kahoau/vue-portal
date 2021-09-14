import moment from "moment-timezone";

const mixins = {
    methods: {
        getDate(dateStr) {
            return (dateStr !== undefined) ? moment.tz(dateStr, "Asia/Taipei").startOf("day") :
                moment.tz("Asia/Taipei").startOf("day");
        }
    }
}

export default mixins