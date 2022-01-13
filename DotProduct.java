public class DotProduct {
  public static void main(String[] args) {

    Solution sol = new Solution();

    int[] arr1 = {1, 2, 3, 4};
    int[] arr2 = {-3, -1, 0, 2};

    System.out.println(sol.solution(arr1, arr2));
  }
}

class Solution {
  public int solution(int[] a, int[] b) {
      int answer = 0;
      
      for (int i=0; i<a.length; i++)
      {
          answer += a[i] * b[i];
      }
      
      return answer;
  }
}