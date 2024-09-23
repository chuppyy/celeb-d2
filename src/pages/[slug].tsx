import { Suspense } from "react";
import Script from "next/script";
import Head from "next/head";
const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
import { useEffect } from 'react';
export default function Page(data: any) {
  const article = data.data;
  //QC video
 /* useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://nexvelar.digital/dist/dev_player.js?site=eb373146-0084-4675-83c9-23556caad088?v=${Math.floor(
      Math.random() * 1000
    )}`;
    scriptElement.async = true;
    const scriptContainer = document.getElementById(
      "player_dev"
    );
    if (scriptContainer) {
      scriptContainer.appendChild(scriptElement);
    }
    console.log("scriptElement2222", scriptElement);

    return () => {
      if (scriptContainer) {
        scriptContainer.removeChild(scriptElement);
      }
    };
  }, []);*/

useEffect(() => {
  // New Script
  const script = document.createElement("script");
  script.src = `https://cdn.unibotscdn.com/player/mvp/player.js?v=${Math.floor(
    Math.random() * 1000
  )}`;
  script.async = true;
  document.head.appendChild(script);
  // Ensure the script runs once the component mounts
  const script2 = document.createElement("script");
  script2.innerHTML = `
      window.unibots = window.unibots || { cmd: [] };
      unibots.cmd.push(function() { unibotsPlayer("boonovel.com_1703240626524") });
  `;
  const scriptContainer = document.getElementById("div-ub-boonovel.com_1703240626524")
  if(scriptContainer) {
    scriptContainer.appendChild(script2);
  }
  
  // Cleanup function to remove the script when the component unmounts
  return () => {
    const div = document.getElementById("div-ub-boonovel.com_1703240626524");
    if (div) {
      div.innerHTML = "";
    }
  };
}, []);

  
  useEffect(() => {
    try {
      var qcImgDiv = document.getElementById("qcImg");
      if (qcImgDiv ) {
        var insElement = document.createElement("ins");
        insElement.className = "adsbygoogle";
        insElement.style.display = "block";
        insElement.setAttribute("data-ad-client", "ca-pub-3052636440995168");
        insElement.setAttribute("data-ad-slot", "7642488897");
        insElement.setAttribute("data-ad-format", "auto");
        insElement.setAttribute("data-full-width-responsive", "true");
        // Chèn đối tượng ins vào thẻ div
        qcImgDiv.appendChild(insElement);
      }
       var qcDivqc3 = document.getElementById("qcmgidgb3");
        if(qcDivqc3){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");
            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936535ScriptRootC1583648";
            scriptContainer.appendChild(scriptDiv);
            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/c/e/celebrity.thongtinluat.com.1583648.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);
            // Chèn scriptContainer vào thẻ div "qc"
            qcDivqc3.appendChild(scriptContainer);
            qcDivqc3.appendChild(scriptTag);
        }
        if (qcDiv) {          

        // Tạo một thẻ div mới để chứa script và amp-embed
          var scriptContainer = document.createElement("div");

          // Tạo thẻ div cho script
          var scriptDiv = document.createElement("div");
          scriptDiv.id = "M936535ScriptRootC1576086";
          scriptContainer.appendChild(scriptDiv);

          // Tạo thẻ script
          var scriptTag = document.createElement("script");
          scriptTag.src =
            "https://jsc.adskeeper.com/c/e/celebrity.thongtinluat.com.1576086.js";
          scriptTag.async = true;
          //  scriptContainer.appendChild(scriptTag);

          // Chèn scriptContainer vào thẻ div "qc"
          qcDiv.appendChild(scriptContainer);
          qcDiv.appendChild(scriptTag);
        }         
      
      // push ads

      var ads = document.getElementsByClassName("adsbygoogle").length;
      console.log("ads",ads);
      for (var i = 0; i < ads; i++) {
        ((window as any).adsbygoogle =
          (window as any)?.adsbygoogle || [])?.push({});
      }
    } catch (err) {
      console.log("err2222");
    }
   // get all iframe
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe: HTMLIFrameElement) => {
      if (iframe) {
        if (iframe.src.includes("twitter")) {
          iframe.style.height = window.innerWidth <= 525 ? "650px" : "827px";
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "550px";
          iframe.style.margin = "0 auto";
        }else if (iframe.src.includes("instagram")) {
          iframe.style.height = window.innerWidth <= 525 ? "553px" : `${628}px`;
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "100%";
          iframe.style.margin = "0 auto";
        }else{    
               iframe.style.height = window.innerWidth <= 525 ? "250px" : "300px";
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "100%";
          iframe.style.margin = "0 auto";
        }
      }
    });

    
  }, []);
  return (
    <>
      <Head>
        <title>{article.name+"-"+article.userCode}</title>
        <meta property="og:image" content={article.avatarLink} />
        <meta property="og:title" content={article.name+"-"+article.userCode} />  
             
      </Head>
     <Script id="gg-1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-ZSFP3RH4BR`} />
      <Script id="gg-2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZSFP3RH4BR');
        `}
      </Script>

      <Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3052636440995168"/>
      
      <main>
{/*         <Script src="/qcscript.js" /> */}
        <div className="container-flu details">
          <ins
      className="adsbygoogle"    
     style={{ display: 'block' }}
     data-ad-client="ca-pub-3052636440995168"
     data-ad-slot="7182188423"
     data-ad-format="auto"
     data-full-width-responsive="true"
    />    
     
          <h1>{article.name}</h1>               
          <p className="mb-4 text-lg">
            Posted: {formatDate(article.dateTimeStart)}
          </p>
          <div id="player_dev">           
          </div>
          <div id="div-ub-boonovel.com_1703240626524"></div>
         



          <Suspense fallback={<p>Loading ...</p>}>
            <article
              className="content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Suspense>
        </div>
        {/*<div id="M936535ScriptRootC1576089"></div>*/}
        {/*<script src="https://jsc.adskeeper.com/c/e/celebrity.thongtinluat.com.1576089.js"  async ></script>*/}
      
       </div>
              <div id="M936535ScriptRootC1576089"></div>
        <script
                  src="https://jsc.adskeeper.com/c/e/celebrity.thongtinluat.com.1576089.js"
          async
        ></script>
        
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const slug = params?.slug;
    const response = await fetch(
      `${process.env.APP_API}/News/news-detail?id=${slug?.slice(
        slug?.lastIndexOf("-") + 1
      )}`,
    ).then((res) => res.json());
    return {
      props: { data: response.data },
      revalidate: 360000
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
}
