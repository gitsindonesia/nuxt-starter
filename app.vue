<template>
  <Head>
    <!-- Google tag (gtag.js) -->
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-44SPLJSV5C" />
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-44SPLJSV5C');
    </Script>
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
