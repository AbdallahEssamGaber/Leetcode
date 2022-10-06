int climbStairs(int n){
    long one = 1, two = 1;
    for(int i = 0; i <= n-1; i++) 
    {						
        long temp = one;
        one = one + two, two = temp;
    }
    return two;
}