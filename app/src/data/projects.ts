export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  external?: boolean;
  type?: "primary" | "default" | "retrospect";
};

export type Project = {
  id: string;
  title: string;
  badges: string[];
  descriptionLines: string[];
  images: ProjectImage[];
  techTags: string[];
  links: ProjectLink[];
  retrospectiveLines?: string[];
};

export const dotnetProjects: Project[] = [
  {
    id: "mes-factory",
    title: "전기자동차 배터리 공장 생산 관리 시스템",
    badges: ["MES", "HIS"],
    descriptionLines: [
      "ERP 시스템의 하위 모듈 중 '제조공장생산관리(MES)' 모듈을 컨버전 및 유지보수하였습니다.",
    ],
    images: [],
    techTags: ["C#", "winform", "PLC 통신", "Oracle"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "회고", type: "retrospect" },
    ],
    retrospectiveLines: [
      "⦁	주요 업무",
      "델파이 언어로 되어있는 통신 프로그램을 C#으로의 컨버전, 멀티 스레드를 사용한 현장에서의 PLC 설비와의 통신 등",
      "",
      "⦁	느낀점",
      "첫 직장이고 짧은 기간이었지만, 델파이 언어를 읽고, 간단한 디버깅을 할수 있게 되었고, 설비가 있는 공장에서 직접 c#으로 컨버전 한 프로그램을 통해 직접 통신하는 기회를 가질 수 있었습니다.",
    ],
  },
  {
    id: "airbrain",
    title: "부산보건환경연구원 관제프로그램",
    badges: ["실시간 관제", "통계 분석"],
    descriptionLines: [
      "부산 전역의 미세먼지 수치를 실시간으로 표출하고 보고서에 필요한 각종 통계자료를 만들어주는 데스크탑 앱입니다.",
      "10여년간 다른 업체에서 팀별로 제공한 4개의 프로그램을 사용하다 통합 및 고도화를 하기위해 업체를 변경해 새로 재개발하게 된 프로젝트입니다.",
      "실시간 자료가 디비에 들어오는 순간 디비 프로시저를 통해 상태값을 달아주는 기능과 보고서에 필요한 통계자료를 위한 복잡한 디비 쿼리 구현, 화면에 맞는 달력 커스터마이징에 힘썼습니다.",
    ],
    images: [
      { src: "/dotnet/airbrain/page1.png", alt: "관제화면1" },
      { src: "/dotnet/airbrain/page2.png", alt: "관제화면2" },
      { src: "/dotnet/airbrain/page3.png", alt: "관제화면3" },
      { src: "/dotnet/airbrain/page4.png", alt: "관제화면4" },
      { src: "/dotnet/airbrain/page5.png", alt: "관제화면5" },
      { src: "/dotnet/airbrain/page6.png", alt: "관제화면6" },
      { src: "/dotnet/airbrain/page7.png", alt: "관제화면7" },
      { src: "/dotnet/airbrain/page8.png", alt: "관제화면8" },
    ],
    techTags: ["C#", "winform", "mariadb", "procedure", "1인 개발"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/byeol-bit/AIRBRAIN.git",
        external: true,
        type: "primary",
      },
      { label: "회고", type: "retrospect" },
    ],
    retrospectiveLines: [
      "⦁	주요 업무",
      "Web GIS에 해당 권역, 측정소의 실시간 상태 표출,",
      "실시간 자료를 바탕으로 업무에 필요한 각종 통계자료 표출",
      "",
      "⦁	문제 해결",
      "4개의 기존 프로그램 통합 및 미래의 이상값을 예측해주는 AI를 추가하는 고도화 프로젝트",
      "",
      "담당 개발자가 진행하지 못하는 상황이 발생하여 프로젝트 마감 2개월 전 내가 담당하게 됨",
      "기존 업체로부터 전달받아야하는 자료로 전달받지 못한 상황 속에서 경험해본 적 없는 큰 규모이고,",
      " 마감기한이 촉박했지만, 한편으로는 나를 증명할 수 있는 기회라는 생각이 듦",
      "나는 이 상황을 해결하기 위해 고객사가 위치한 부산으로 내려가 2주간 매일 고객사에 출근하여 프로그램 직접 테스트하며 동작과정 을 기록하고, 실제 사용자를 만나 요구사항을 수집한 후, 프로그램의 기본 틀을 잡았음",
      "그 후 남은 기간동안 필수 기능 중심으로 구현 완료 후 납품",
      "납품 후 7개월간 고객사와 소통하며 프로그램을 완성시킬 수 있었음",
      "",
      "⦁	느낀 점",
      "초기에는 모든 오작동에 대한 불평불만이 나에게로 왔지만, 프로그램이 완전히 구축된 후에는 유지보수차 고객사에 갈 때마다 그간의 노고에 대한 칭찬과 함께 프로그램을 잘 사용하고 있다는 말을 들을 때마다 포기하지 않고 끝까지 개발한 것에 뿌듯함을 느꼈다.",
      "또한 아무도 알려주지 않는다고 가만히 있는 게 아니라 직접 부딪히며 어떻게든 해결책을 만들고자 하는 노력을 언젠가는 알아봐준다는 것을 느낀 소중한 경험이었다.",
    ],
  },
  {
    id: "highway",
    title: "한국도로공사 고속도로 대기오염 분석 프로그램",
    badges: ["대기 모델링", "통계 분석"],
    descriptionLines: [
      "고속도로의 대기오염 현황 파악 및 관리를 위한 데스크탑 앱을 개발했습니다.",
      "해당 프로젝트에서는 차종별, 노션별, 콘존별 배출량을 산정이 핵심과제였기에 기초자료를 모아 확인, 분류, 재가공을 통해 배출량을 산정하는 알고리즘을 환경팀과 함께 6개월에 걸쳐 구현하였습니다.",
      "고속도로를 GIS상에서 콘존이란 단위로 쪼개고 사용자가 설정한 범위내에 정확한 콘존단위의 고속도로를 표출해주는 부분에 많은 공을 들였습니다.",
    ],
    images: [
      { src: "/dotnet/highway/main.png", alt: "알고리즘" },
      { src: "/dotnet/highway/page1.png", alt: "프로그램사진1" },
      { src: "/dotnet/highway/page2.png", alt: "프로그램사진2" },
      { src: "/dotnet/highway/page3.png", alt: "프로그램사진3" },
      { src: "/dotnet/highway/page4.png", alt: "프로그램사진4" },
      { src: "/dotnet/highway/page5.png", alt: "프로그램사진5" },
      { src: "/dotnet/highway/page6.png", alt: "프로그램사진6" },
    ],
    techTags: ["C#", "winform", "mariadb", "1인 개발"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "회고", type: "retrospect" },
    ],
    retrospectiveLines: [
      "⦁	주요 업무",
      "1차년도 : 고속도로에 필요한 자료 입력 및 배출량 산정,",
      "2차년도 : Web GIS에 전국의 고속도로의 배출량에 따른 상태 표출,",
      "선택한 고속도로 구간 별 모델링 수행",
      "",
      "⦁	문제 해결",
      "고속도로별 운영사가 달라 양식, 고속도로명, 노선별 교통량 구간 등 각각의 데이터 양식이 모두 다르기에 원하는 양식으로 자료를 추 출하는 것이 이 프로젝트의 가장 큰 난제였습니다.",
      "이를 해결하기 위해 교통량 구간과 콘존의 매칭 알고리즘을 환경팀과 함께 직접 개발하였고, 알고리즘을 통해 매칭되지 않는 부분은 사용자가 직접 매칭할 수 있는 페이지를 만들어 직접 매칭하는 부분을 최소화하여 사용자 편의성을 높이는데 힘썼습니다.",
      "⦁	느낀 점",
      "이 프로젝트에서는 다른 무엇보다 정형화되어있는 데이터를 다루는 것이 얼마나 큰 축복인지를 깨달았습니다.",
    ],
  },
  {
    id: "weather-analysis",
    title: "기상 분석 프로그램",
    badges: ["통계 분석"],
    descriptionLines: [
      "기상자료 API를 활용한 기상 분석 데스트탑 앱을 개발했습니다.",
      "지도에 사용자가 선택한 위치에서 거리기반으로 가장 가까운 20개의 기상대 표시해주는 기능과 선택한 기상대의 기상자료 API를 활용하여, 분석자료, 시계열그래프, 바랑장미를 표출하는 기능에 힘썼습니다.",
    ],
    images: [
      { src: "/dotnet/cesare-mt/page1.png", alt: "지도화면1" },
      { src: "/dotnet/cesare-mt/page2.png", alt: "분석화면2" },
      { src: "/dotnet/cesare-mt/page3.png", alt: "분석화면3" },
      { src: "/dotnet/cesare-mt/page4.png", alt: "분석화면4" },
      { src: "/dotnet/cesare-mt/page5.png", alt: "분석화면5" },
    ],
    techTags: ["C#", "winform", "sqlite_3", "기상자료 api", "1인 개발"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/byeol-bit/cesare-mt.git",
        external: true,
        type: "primary",
      },
      { label: "회고", type: "retrospect" },
    ],
    retrospectiveLines: [
      "⦁	주요 업무",
      "Web GIS에 특정 지점으로부터 가까운 20개의 측정소 표출, 측정소 API를 활용한 자동 자료 다운로드",
      "",
      "⦁	문제 해결",
      "이 프로젝트는 위의 프로젝트를 진행한 후 개발한 소규모 프로젝트이고, 개발 난이도도 쉬웠습니다. 그래서 이번엔 빠른 속도로 개발 하는 것에 목표를 두고 1개월이라는 스스로의 개발기간을 정하고 개발속도 향상에 집중하였습니다.",
      "",
      "⦁	느낀 점",
      "여러 프로젝트를 진행한 후 개발한 소규모 프로젝트여서 개발속도 뿐만 아니라 설계 방향부터 코드 가독성까지 스스로 발전된 것을 느낄 수 있었습니다.",
    ],
  },
];

export const electronProjects: Project[] = [
  {
    id: "file-transfer",
    title: "자료 송수신 프로그램",
    badges: ["사이드 프로젝트"],
    descriptionLines: [
      "전국 각지의 운고계 서버에 실시간으로 저장되는 파일 자료들을 SFTP 방식으로 특정 서버로 송신하는 간단한 프로그램입니다.",
    ],
    images: [
      { src: "/electron/page1.png", alt: "송수신화면1" },
      { src: "/electron/page2.png", alt: "송수신화면2" },
      { src: "/electron/page3.png", alt: "송수신화면3" },
    ],
    techTags: ["Electron", "React", "Node.js", "SFTP"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "회고", type: "default" },
    ],
  },
];

export const nextjsProjects: Project[] = [
  {
    id: "internal-tools",
    title: "사내 편의 사이트",
    badges: ["사이드 프로젝트"],
    descriptionLines: [
      "Next.js 14의 App Router를 사용하여 개발한 간단한 블로그 플랫폼입니다.",
      "회사 다른팀에서 수작업으로 하고있는 것들 중 개발하면 효율이 올라갈 것 같은 기능을 업무 중간중간 만들어봤습니다.",
      "개발한 페이지로는 주소를 좌표로 변환, 위경도를 UTM좌표로 변환 및 지도에서 확인하는 페이지, 구내식당의 카카오페이지에있는 점심메뉴 크롤링 페이지, 자주 사용하는 측정소의 자료 추출 페이지, electron으로 개발한 통신이 원활이 되고있는지 확인하는 페이지 등이 있습니다.",
    ],
    images: [
      { src: "/nextjs/page1.png", alt: "분석화면1" },
      { src: "/nextjs/page2.png", alt: "분석화면2" },
      { src: "/nextjs/page3.png", alt: "분석화면3" },
      { src: "/nextjs/page4.png", alt: "분석화면4" },
      { src: "/nextjs/page5.png", alt: "분석화면5" },
    ],
    techTags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "supabase"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "라이브 데모", type: "default" },
      { label: "회고", type: "default" },
    ],
  },
];

export const reactProjects: Project[] = [
  {
    id: "find-hidden-master",
    title: "지도로 보는 맛집 로그",
    badges: ["SPA", "예시"],
    descriptionLines: [
      "데브코스 과정에서 진행한 첫번째 프로젝트입니다.",
      "카카오맵API를 활용한 식당 추가, 유저의 리뷰를 기반으로 한 경로 추적 기능을 담은 맛집을 찾아다니는 플랫폼입니다.",
      "팀장직을 부여받고, 카카오맵API로 경로를 추적하는 기능과 지도페이지의 레이아웃, 사이드바 구현을 담당해 작업했습니다.",
    ],
    images: [
      { src: "/react/first-project/page-1.png", alt: "맛집화면1" },
      { src: "/react/first-project/page-2.png", alt: "맛집화면2" },
      { src: "/react/first-project/page-3.png", alt: "맛집화면3" },
      { src: "/react/first-project/page-4.png", alt: "맛집화면4" },
      { src: "/react/first-project/page-5.png", alt: "맛집화면5" },
    ],
    techTags: ["React", "Node.js", "Express"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/byeol-bit/memto-first-project-frontend",
        external: true,
        type: "primary",
      },
      { label: "회고", type: "retrospect" },
    ],
    retrospectiveLines: [
      "⦁	주요 업무",
      "초기 기획서 작성 및 기획서 고도화",
      "카카오맵API를 활용한 경로 추적 로직 구현",
      "마커 생성 및 마커 커스텀(오버레이) 구현",
      "지도페이지의 레이아웃 및 사이드바 구현",
      "맛집 탑5, 랜덤고수3명 컴포넌트 구현",
      "",
      "⦁	문제 해결",
      "모든 기능들이 '지도'라는 한 페이지안에서 보여주는 방식이다보니 초기 개발 단계시 병합 충돌을 방지하기 위해 각각 페이지에 컴포넌트별로 개발하여 추후에 해당 페이지를 사이드바, 상세사이드바에 옮겨 표출하는 방식으로 작업을 진행했습니다.",
      "기존 페이지에 접근하는 방식에서는 'path params'을 통해 맛집 정보나 고수 정보를 받아왔는데 페이지가 컴포넌트화되어 사이드바에 들어가다보니 새로운 데이터 처리 방식이 필요했습니다. 'context'를 사용하여 문제를 해결하였고",
      "그렇게 개발 방식이 변경되었을때 'context'란 무엇인지, 어떻게 사용해야하는지 팀원들에게 자료를 공유해 개발에 차질이 없도록 진행했습니다.",
      "",
      "⦁	느낀 점",
      "tanstack query를 처음 사용해보았는데 캐시관리 방식, 페이지네이션, 무한스크롤 지원 등 많은 기능들이 있다는 것을 알고 이용할 수 있게 되었고",
      "낙관적 업데이트라는 방식을 통해 사용자에게 더 좋은 사용성을 제공 할 수 있다는 것을 배웠습니다.",
      "또한 내가 기획한 내용을 팀원들이 이해할 수 있도록 잘 전달하고, 혼선이 생기지 않게 기록하는 것이 얼마나 중요한지 알게 되었습니다.",
    ],
  },
];
