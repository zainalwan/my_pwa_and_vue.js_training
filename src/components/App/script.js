export default {
    data()
    {
        return {
            name: null
        }
    },
    computed: {
        nameIsSupplied()
        {
            if(this.name === null)
            {
                return false;
            }
            else if(this.name === '')
            {
                return false;
            }
            return true;
        }
    }
}
