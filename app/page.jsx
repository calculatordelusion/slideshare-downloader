"use client";
import { useContext } from "react";
import { AppContext } from "@/store";
import { AppBar, Preview, UrlBox, Selection } from "@/components/common";

export default function Home() {
  const { state } = useContext(AppContext);

  return (
    <div>
      <AppBar />
      <header>
        {/* Your header content goes here */}
        <h1>Welcome to SlideShare Downloader</h1>
      </header>
      <nav>
        {/* Your navbar content goes here */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="container">
        <main className="main">
          <UrlBox />
          {state.thumbs.length ? <Preview /> : ""}
          {state.selection_mode === true ? (
            <Selection images={state.thumbs} />
          ) : (
            ""
          )}
        </main>
      </div>
      <footer className="footer_wrapper">
        <div className="footer">
          <span>&copy; 2024 &#183; SlideShare Downloader</span>
          <span className={"disclaimer"}>
            SlideShare Downloader operates under strict adherence to copyright
            laws. The platform functions as a conduit, retrieving content
            directly from the Content Delivery Networks (CDNs) of the original
            sources. It is important to note that SlideShare Downloader does not
            host or store any copyrighted material on its servers. Furthermore,
            the platform maintains no affiliation with SlideShare or any other
            content-sharing platforms.
          </span>
        </div>
      </footer>
    </div>
  );
}
