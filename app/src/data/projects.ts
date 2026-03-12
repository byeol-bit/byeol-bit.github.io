export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  external?: boolean;
  type?: "primary" | "default";
};

export type Project = {
  id: string;
  title: string;
  badges: string[];
  descriptionLines: string[];
  images: ProjectImage[];
  techTags: string[];
  links: ProjectLink[];
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
      { label: "회고", type: "default" },
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
      { src: "./public/dotnet/airbrain/page1.png", alt: "관제화면1" },
      { src: "./public/dotnet/airbrain/page2.png", alt: "관제화면2" },
      { src: "./public/dotnet/airbrain/page3.png", alt: "관제화면3" },
      { src: "./public/dotnet/airbrain/page4.png", alt: "관제화면4" },
      { src: "./public/dotnet/airbrain/page5.png", alt: "관제화면5" },
      { src: "./public/dotnet/airbrain/page6.png", alt: "관제화면6" },
      { src: "./public/dotnet/airbrain/page7.png", alt: "관제화면7" },
      { src: "./public/dotnet/airbrain/page8.png", alt: "관제화면8" },
    ],
    techTags: ["C#", "winform", "mariadb", "procedure", "1인 개발"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/byeol-bit/AIRBRAIN.git",
        external: true,
        type: "primary",
      },
      { label: "회고", type: "default" },
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
      { src: "./public/dotnet/highway/main.png", alt: "알고리즘" },
      { src: "./public/dotnet/highway/page1.png", alt: "프로그램사진1" },
      { src: "./public/dotnet/highway/page2.png", alt: "프로그램사진2" },
      { src: "./public/dotnet/highway/page3.png", alt: "프로그램사진3" },
      { src: "./public/dotnet/highway/page4.png", alt: "프로그램사진4" },
      { src: "./public/dotnet/highway/page5.png", alt: "프로그램사진5" },
      { src: "./public/dotnet/highway/page6.png", alt: "프로그램사진6" },
    ],
    techTags: ["C#", "winform", "mariadb", "1인 개발"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "회고", type: "default" },
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
      { src: "./public/dotnet/cesare-mt/page1.png", alt: "지도화면1" },
      { src: "./public/dotnet/cesare-mt/page2.png", alt: "분석화면2" },
      { src: "./public/dotnet/cesare-mt/page3.png", alt: "분석화면3" },
      { src: "./public/dotnet/cesare-mt/page4.png", alt: "분석화면4" },
      { src: "./public/dotnet/cesare-mt/page5.png", alt: "분석화면5" },
    ],
    techTags: ["C#", "winform", "sqlite_3", "기상자료 api", "1인 개발"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/byeol-bit/cesare-mt.git",
        external: true,
        type: "primary",
      },
      { label: "회고", type: "default" },
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
      { src: "./public/electron/page1.png", alt: "송수신화면1" },
      { src: "./public/electron/page2.png", alt: "송수신화면2" },
      { src: "./public/electron/page3.png", alt: "송수신화면3" },
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
      { src: "./public/nextjs/page1.png", alt: "분석화면1" },
      { src: "./public/nextjs/page2.png", alt: "분석화면2" },
      { src: "./public/nextjs/page3.png", alt: "분석화면3" },
      { src: "./public/nextjs/page4.png", alt: "분석화면4" },
      { src: "./public/nextjs/page5.png", alt: "분석화면5" },
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
    id: "todo-example",
    title: "할 일 관리 앱 (예시)",
    badges: ["SPA", "예시"],
    descriptionLines: [
      "React와 로컬 스토리지를 사용한 할 일(Todo) 관리 SPA 예시 프로젝트입니다.",
      "할 일 추가·수정·삭제(CRUD)와 상태별 필터(전체/진행중/완료) 기능을 구현했으며, 컴포넌트 분리와 상태 관리 흐름을 연습하기 위해 제작했습니다.",
    ],
    images: [],
    techTags: ["React", "JavaScript", "CSS"],
    links: [
      { label: "GitHub", type: "default" },
      { label: "회고", type: "default" },
    ],
  },
];
