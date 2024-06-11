'use client'
import Head from "next/head";
import { Adsense } from '@ctrl/react-adsense';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);


  return (
    <div className="adsbygoogle border-2 border-black text-center h-96 w-96 m-auto">

      <Adsense
        client="ca-pub-9102591825353648"
        slot="4723421365"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}


