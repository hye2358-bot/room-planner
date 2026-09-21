// ─────────────────────────────────────────────────────────────
//  Firebase 설정 파일
//
//  Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) 에 나오는
//  "const firebaseConfig = { ... };"  부분만 복사해서
//  아래 예시 블록(const firebaseConfig 부터 }; 까지)을 통째로 바꿔 넣으세요.
//  import 로 시작하는 줄, initializeApp 줄은 필요 없어요.
// ─────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey: "여기에_붙여넣기",
  authDomain: "여기에_붙여넣기",
  projectId: "여기에_붙여넣기",
  storageBucket: "여기에_붙여넣기",
  messagingSenderId: "여기에_붙여넣기",
  appId: "여기에_붙여넣기"
};

// ↓ 이 줄은 지우지 마세요
window.FIREBASE_CONFIG = firebaseConfig;
