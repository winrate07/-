# 학과어디가 (Hakgwa Where)

고등학생들을 위한 맞춤형 대학 학과 추천 웹서비스입니다.

## 🎯 서비스 개요

성적, 적성, 흥미, 관심 분야, 선호 지역을 종합적으로 분석하여 고등학생들에게 최적의 대학 학과를 추천해드립니다.

### 주요 기능
- 📊 **성적 분석**: 과목별 성적 입력 및 분석
- 🧠 **적성 검사**: 간단한 검사로 적성과 흥미 파악
- 🎯 **맞춤 추천**: 종합적인 분석을 통한 학과 추천
- 🤖 **AI 상담**: 24시간 AI 챗봇 상담
- 👨‍🏫 **전문가 상담**: 경험 많은 전문가와 1:1 상담
- 📍 **지역 선택**: 선호 지역 기반 대학 추천

### 타겟 사용자
- 고등학교 1학년: 진로 탐색과 적성 파악
- 고등학교 2학년: 관심 분야 심화와 진로 계획
- 고등학교 3학년: 수시/정시 지원을 위한 학과 선택

## 🚀 시작하기

### 개발 환경 설정

```bash
# 프로젝트 클론
git clone [repository-url]
cd hakgwa-where

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 🛠 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: (MVP) SQLite/Prisma 또는 Firebase
- **AI**: OpenAI API (챗봇 상담)
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
hakgwa-where/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # 메인 페이지
│   │   ├── recommend/       # 학과 추천
│   │   ├── test/           # 적성 검사
│   │   ├── consult/        # 상담 기능
│   │   ├── admin/          # 관리자 기능
│   │   └── api/            # API 라우트
│   ├── components/         # 재사용 컴포넌트
│   └── lib/               # 유틸리티, 알고리즘
├── public/                # 정적 파일
├── prisma/               # 데이터베이스 스키마
└── package.json
```

## 🎨 주요 페이지

- **메인 페이지**: 서비스 소개 및 시작점
- **학과 추천**: 성적 입력 및 추천 결과
- **적성 검사**: 간단한 검사 및 결과 분석
- **상담**: AI 챗봇 및 전문가 상담
- **관리자**: 추천 알고리즘 및 데이터 관리

## 🔧 개발 가이드

### 새로운 페이지 추가
```bash
# 예: 추천 페이지 추가
mkdir src/app/recommend
touch src/app/recommend/page.tsx
```

### 컴포넌트 추가
```bash
# 예: 버튼 컴포넌트
touch src/components/Button.tsx
```

## 📊 차별화 포인트

- **AI 기반 24시간 상담**: 언제든지 상담 가능
- **전문가 + AI 상담 결합**: 두 가지 상담 방식 제공
- **맞춤형 추천 알고리즘**: 다중 요소 종합 분석
- **고등학생 맞춤**: 1~3학년별 차별화된 서비스

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**학과어디가** - 고등학생을 위한 맞춤형 대학 학과 추천 서비스
