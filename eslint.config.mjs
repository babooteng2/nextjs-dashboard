import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      "@next/next/no-img-element": "off", // <img> 태그 경고 끄기
      "react-hooks/exhaustive-deps": "warn", // 에러 대신 경고로 변경
    },
  },
]);

export default eslintConfig;
