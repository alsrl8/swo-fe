<script lang="ts">
  export let features: string[] = [
    "러닝 대회 목록 (Dummy Data)",
    "다크 모드 지원",
    "회원 정보 관리 (미개발)",
    "구글 로그인 (미개발)"
  ];
</script>

<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">주요 기능</h2>
<ul class="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
  {#each features as feature, index (index)}
    <li>{feature}</li>
  {/each}
</ul>