import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "IPhone": "url('https://s3-alpha-sig.figma.com/img/08cf/2741/96bc14d4bf6fe3c5b3feff8f4ebdf9c6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MDdB8EIeClJEIjRm9pkD99r0wGfKvlbjB~dsGkJM5K0z2AYmhONrUgoj1D-DHQxBAk6-wlGTrmHGGkuOogL9kp6Hxryul1a1L-FxmHWaX~tEHMEOrmNjizAE9xW9chcDI2Uv7rNR3IQJ8eNa-9p~PbD9GTGUop8yRvd-~hwbJGWeaZowkpyRX8grEsh6LXUxRkcEqNzCaLPmrolImmO0H222H6CtqEyCo0BeWcSij1aGVNsyKdEBdalJO6qTBAR4f8BkbQdQzoWgHbrdkixOMOrfPU8-3deGOY1u6X2IskdZe30VqNcl9QxZEc9mnGsEGXpcZU33kCKvdbgu7r6rYA__')",
        "IPhonePro": "url('https://s3-alpha-sig.figma.com/img/6c59/5522/2fe8e8b974d08d83bd05a603a9aea160?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KuV0gG7UguTC8EqlYA-3uaigUzgH6kCIMjvmpHTazyamqPLdJNqO1dHl2m1mvMo8wQuJD92Km0jZBjANV5mToTGvNF3cF2T-PQNk2kIAMMIwZI5habjOUL98xC3-IPma0MKwBOy7x4VoY4aiet4GBVCVkdb0W0LJvko7WNvfqpzTAB8eaUVLIietW~8PyR15V9BLuLRUN1WN-tgo7-yyPI6oRjnuvDFq1XNwNNuuU-JwPX6~4cg4UD83e5w5qaBQTP76P5CGKWoRBezNRu15O-g6bLyLJWyCugCIDWDaNlpVpHADTXa~Bnjm29dLJmMHtajth49s~1qMCpLyYqGULQ__')",
        "Watch": "url('https://s3-alpha-sig.figma.com/img/4f1e/2560/26cdea6b9646b2bc8c7b74ffa679955c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUfy2i~2y2G9XhCSvpomnQBWd1~71w198cjLwvqmGtBjnDbWrk9C9dOD2J1HlOsUyRmR7QAUw5iG7afwdKjqp9Qk3ESlSDJISekE54XnYps6oeot3nCJqbQKtJBSJ~FLMZ0gTbSD9Vj2NLqjLCBpV5f5pnI4zg4X3mdRx2Bdw81VKnKo-ugUGvbZ8SGBUqqw8GBuhLjMsSakQ~iDn7ekaS~nj1Vbv1sDZ1P~ygH-qqopIvTbExS74z8UoAs0JXTZvwqXIN4QDmbXUXiwoJfD-PjGUxlcdcwLEDZy-fQgKFiZJH1PIpXJ5ReGtR4oSiyLal~eV1fIyOV9xlSyuZJlyQ__')",
      "WatchS8": "url('https://s3-alpha-sig.figma.com/img/de97/0f78/678bc0dd4540b11ad948a3c49e231afb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3QS3FIvihzdkD9wF5p26CYkNnuPb1j1JPd~cQzv02grWktg4PMI5oH2YtazGEtadfcEcAbEXg~MKsf3GSm73yLe0-KPQ0-A3oYeCFo0-yNbPIfj~3~w1B4-hqA1kmUfFWCGS1HtRSePHUZ-pcwMdZtFHkevgW3ygcodefkmGuB1Xuj0VP8-xF0sstIEhpPY9ZtBsl7O~mz5-fOoLmQ5RzYrjXLPZiPZ3cJe4-CDjs3CIv6rNY4GfUx7MCKWAuqO4-7pxuU~xNaV1ydw6nI4eTxhF34bGVr2L3oMNqyuULgQTd8otVfozyxSH45-GfvAnLiRHSqxDWM5PqQQ7THoQQ__')",
      "AirPods": "url('https://s3-alpha-sig.figma.com/img/ed1a/265c/d349fb4e8af921dba0d411b53c1e6f6c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAZnatGCknexINqzbGil6HV4GcNtpkOQY94qqiwk12qH8pyhgH9mpsKxgRD~3Y9u27a2~F~zvpdTzqPwRNBYR9DjgVnsxpL8uyDvhGhS5elfMFTFH2BXKDlH3-NLU-ZJhQbDlpDbbFts06auB3DiQ7cNVFsFZYRRw-D3W1ecBjuvuhloXP3L--g8HVMbtGfEV6pooh8-tc5s11YcVETvMqDVQnSxwviG8ju3oWckPh-UUXvTvbiNoUKsGwTVHTKnSDRDzxUbtc8INiRK12g6WLpKpVgWUIdhSLkseOvKyNs101EqOhShROgBMHLPghbIH3RCgZYa2e36YY4IVOSi0A__')",
      "WatchSE": "url('https://s3-alpha-sig.figma.com/img/0e4e/f8f1/e0079f3458fdebe6e0c455b06c306ae6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3ENpI3B31nbZ84y4q5buA0rba25qh6Q~qXUFqR38LW4mXg8HSTRj~tjIYWCs5JUzEZUDFnJds9NhyAmkJPyKCk1iAaehMw1c9tGpqveYXXrbXQBjxCxM~KXujwLeZtr32znkBy6L6a2TYqk7FaH2jSbtBcFDszQknNAHSFr4WxFnu9S~a2tl~ckThhQxy2vR0CBaIDFYaQ2zLUTp3z7uXuWyxATCXXwIjExyW0Sg1f15uQd-1EH9JnYosnhlvuwJnB9kdLBTp69TLV4MFBDmQX4VU8b0apQfbC9mGyXaTwJ-vin4-~d2mZ5IkFZFl70bl8VspkyMRC45e7oRFM4Pg__')",
      "MacBook": "url('https://s3-alpha-sig.figma.com/img/2cca/c545/f2fb8af4d6d34b2ef711cf70a6d0cc78?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pI9WCIKaaUXRM70vQexfcLS48e1scEfljbxVIoVM4yOUNaT9~aSiYgilCxjwg0Yy895OvUB0QY8-lFudHCuvCE3QYmMM6KVLk9fB7KPd0doN6HUeOvx1ftXQBjezZ3FG4Yw0S5t~Xyik~3ecV3szJaX8h98aKKAQBgQReihD7NuKXsrxPpZCGvT-1kDyiTOdnEa5JAvWHsiwZ~7LpJaQXBGO95K1HFtOk4StEjQqxtVhspbUvfMFHbwI2QlG0rDLOsF0TviV5GL83bZ1~5JroGgeqvLSmDf~1~IfCl30cyIjCXvXvlxCMbNk0tg13Rb3rwxud2DaCETNWkj7cnGoBw__')",
      "Card": "url('https://s3-alpha-sig.figma.com/img/16ae/71e1/f9b5a14c170d066d5bbecaee6eb12761?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsflV0NZsQzJuX4LSNKUHfX2peNPAvHK~F8NWoSidIr4f6MuZn8z4JAdo0cJ7SuGp2~fVlw-HHKfCXb6-Lh3thaa2zWUVvZam2qcTq7p-cH0K09i8PLOKU0TluV6mvNIBEku-YBZJJEPUJVgSuBAodryZBZ6N2ON1VozAilUIz1slqkhnQJ5-BCFU6mg5DKjdt8KLeP02YPj4YeqQTIz9QmWiwpl9tfy79n18AsWFUd75mNqAzXiGqtzSAviI9DhSfYcDKVnbEOmxdvQlZ5lZb35YWHD-DvtZ7fbri9IA-tI5H1RV1cRdxQR-sqWG~GE6OQ0TOqC0lc0PfP2U7CXbA__')",
      "Fitness": "url('https://s3-alpha-sig.figma.com/img/88bf/f2ec/d37210f325eaca7491bebcc9402ade93?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4fHaldK~suzNZRRqVelX6Jd82VV3nePnO1dKJbNr1uDD~WXa2l0vo5n3a8VOzrcCnztewO64pLZCX29j7P6ZUfkrbDe8Os49MaCfhdCVan-PCtJCJudQhuB3B-4y-YMFa0TjdGUidx94JcFx0fDPHUawt4Rtw9HUimFs7umZI0mWiHvuUtfB6OGbJJaGQ-cmsYQa~fa37SWbKUx88lmqmMEssHmEIVpQXXWkL1MPxmg5LK4XwTm2xHWVaq2ZtRQXU2dueXtzJOza0lMIS950m24Hb41I5GQ1xDkI8CLxoonpj3Mm5IFdmWlFAg88TuxmfIVrkYoB1kj0KRIj~vaRw__')",
      },
    },
  },
  plugins: [],
} satisfies Config;
