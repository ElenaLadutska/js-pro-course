function createCounter(initialValue=0)
{
    return {
        value:initialValue,

            increment(value=1) 
            {
            this.value+=value;
            },
    
            decrement(value=1) 
            {
                this.value-=value;
            },
    
            showValue() 
            {
                return this.value;
            },
    
            discard() 
            {
                this.value=initialValue;
            },
    };
};