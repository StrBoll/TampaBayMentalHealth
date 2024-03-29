import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("init", { origin: "https://cal.com" });
      cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "justinming/book-an-appointment",
        layout: "month_view"
      });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#2b5dff" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div style={{ width: "100%", height: "150%", overflow: "scroll" }}>
      <Cal
        calLink="justinming/book-an-appointment"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
