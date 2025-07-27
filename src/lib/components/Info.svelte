<script lang="ts">
  import InfoCard from './InfoCard.svelte';
  import InfoAlert from './InfoAlert.svelte';
  export const title: string = "README";
</script>

<h1 class="text-3xl font-bold dark:text-gray-100 text-gray-800 mb-4">{title}</h1>
<p class="text-gray-600 mb-4 dark:text-gray-400">
  이 사이트는 러닝 동호회 활동을 돕기 위한 목적으로 만들어졌습니다.
</p>
<InfoAlert 
  title="알림"
  content="이 사이트는 데모 버전으로 고객 정보를 사용하고 있지 않습니다."
/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <InfoCard 
    title="러닝 동호회 관련 정보"
    content="러닝 대회, 번개 모임, 회원 목록 등의 기능을 추가할 예정입니다."
  />
  <InfoCard 
    title="모바일 버전 지원"
    content="모바일 혹은 데스크탑 환경에서 동작하는 UI를 지원합니다."
  />
</div>