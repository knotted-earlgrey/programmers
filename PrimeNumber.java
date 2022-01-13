public class PrimeNumber {
    public static void main(String[] args) {
      
      Solution sol = new Solution();
      int[] arr = {1,2,7,6,4};

      System.out.println(sol.solution(arr));
    }
}

class Solution {
  public int solution(int[] nums) {
      int answer = 0;

      for (int i=0; i<nums.length; i++)
      {
          for (int j=i+1; j<nums.length; j++)
          {
              for (int k=j+1; k<nums.length; k++)
              {
                  int number = nums[i] + nums[j] + nums[k];
                  int count = 0;
                  for (int a=2; a<number; a++)
                  {
                      if (number%a==0)
                      {
                          count++;
                          break;
                      }
                  }
                  
                  if (count==0)
                      answer++;
              }
          }
      }

      return answer;
  }
}