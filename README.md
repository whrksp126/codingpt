# CodingPT - React Native 앱

React Native로 개발된 코딩 학습 플랫폼 앱입니다.

## 🚀 초기 세팅

### 필수 요구사항

- Node.js >= 18
- React Native CLI
- Android Studio (Android 개발용)
- Xcode (iOS 개발용, macOS만)
- CocoaPods (iOS 의존성 관리)

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 프로젝트 클론
git clone [repository-url]
cd codingpt_app

# Node.js 의존성 설치
npm install
```

### 2. iOS 설정 (macOS만)

iOS 개발을 위해서는 CocoaPods 의존성을 설치해야 합니다:

```bash
# Ruby bundler 설치 (처음 한 번만)
bundle install

# iOS 의존성 설치
cd ios && bundle exec pod install && cd ..
```

**왜 Android는 pod install을 하지 않나요?**
- iOS는 CocoaPods를 사용하여 네이티브 라이브러리를 관리합니다
- Android는 Gradle을 사용하여 의존성을 관리하므로 별도의 설치 과정이 필요하지 않습니다

### 3. 환경 설정 파일 생성

프로젝트 루트에 다음 환경 설정 파일들을 생성하세요:

```bash
# .env.local (로컬 개발용)
cp .env.example .env.local

# .env.dev (개발 서버용)
cp .env.example .env.dev

# .env.stg (스테이징용)
cp .env.example .env.stg

# .env (프로덕션용)
cp .env.example .env
```

각 환경 파일에 적절한 API URL과 설정값을 입력하세요.

### Android 실행

```bash
# 로컬 환경
npm run android:local

# 개발 서버
npm run android:dev

# 스테이징
npm run android:stg

# 프로덕션
npm run android:prod
```

### iOS 실행 (macOS만)

```bash
# 로컬 환경
npm run ios:local

# 개발 서버
npm run ios:dev

# 스테이징
npm run ios:stg

# 프로덕션
npm run ios:prod
```

## 📁 프로젝트 구조

```
codingpt/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── screens/        # 화면 컴포넌트
│   ├── navigation/     # 네비게이션 설정
│   ├── contexts/       # React Context
│   ├── services/       # API 서비스
│   ├── utils/          # 유틸리티 함수
│   ├── types/          # TypeScript 타입 정의
│   ├── constants/      # 상수 정의
│   ├── hooks/          # 커스텀 훅
│   └── assets/         # 이미지, 아이콘 등
├── android/            # Android 네이티브 코드
├── ios/                # iOS 네이티브 코드
├── __tests__/          # 테스트 파일
└── global.css          # NativeWind CSS
```

## 🛠️ 주요 기술 스택

- **React Native** 0.80.2
- **TypeScript**
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation**
- **AsyncStorage**
- **Axios** (HTTP 클라이언트)
- **React Native Reanimated** (애니메이션)
- **React Native SVG** (SVG 지원)

### iOS 빌드 문제

```bash
cd ios
bundle exec pod install
cd ..
npm run ios:local
```

### Android 빌드 문제

```bash
cd android
./gradlew clean
cd ..
npm run android:local
```

## 📱 앱 기능

- 사용자 인증 (로그인/회원가입)
- 코딩 강의 학습
- 진행률 추적
- 히트맵으로 학습 기록 시각화
- 퀴즈 시스템
- 개인화된 학습 경험

