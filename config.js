/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "곽호남",
    father: "곽봉석",
    mother: "이옥희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조주희",
    father: "조영기",
    mother: "이선해",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "12:00",
    venue: "라도무스 아트센터",
    hall: "3층 아트리움홀",
    address: "대전광역시 유성구 동서대로 639",
    tel: "042-823-5220",
    mapLinks: {
      kakao: "https://place.map.kakao.com/27596552",
      naver: "https://naver.me/Gxk1CPWi"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "초대합니다",
    content: "함께 맞는 열 번째 겨울날\n앞으로의 모든 계절도 즐겁게 걸어가고자 합니다.\n\n소중한 걸음으로 함께 축복해주시면 감사하겠습니다."
  },

  // ── 연회장 안내 ──
  story: {
    title: "연회장 안내",
    content: "오전 11시 30분 - 오후 1시 30분\n3층 치엘로가든 뷔페"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "곽호남", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "곽봉석", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "이옥희", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "조주희", bank: "국민은행", number: "736001-01-457727" },
      { role: "아버지", name: "조영기", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이선해", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "주희 ♥ 호남 결혼합니다",
    description: "2027년 1월 9일, 소중한 분들을 초대합니다."
  }
};
