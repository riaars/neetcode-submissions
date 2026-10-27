class MedianFinder {
    constructor() {
        this.small = new PriorityQueue((a,b) => b-a) // Max heap for smaller half
        this.large = new PriorityQueue((a,b) => a-b) // Min heap for larger half
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //default, add num to the larger half
        if(this.large.isEmpty() || num > this.large.front()){
            this.large.enqueue(num)
        } else{
            this.small.enqueue(num)
        }

        //check if not balance or the size different more than 1
        if(this.small.size() > this.large.size() + 1)
            this.large.enqueue(this.small.dequeue()) // remove the small and add it to large heap
        else if(this.large.size() > this.small.size() + 1) {
            this.small.enqueue(this.large.dequeue()) //remove the min of large half and add it to smaller halp
        }



    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.small.size() > this.large.size()){
            return this.small.front()
        } else if(this.small.size() < this.large.size()){
            return this.large.front()
        } else{
            return (this.small.front() + this.large.front())/2
        }
    }
}
