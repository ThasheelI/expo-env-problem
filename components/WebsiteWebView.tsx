import { useState } from "react";
import WebView from "react-native-webview";

export const WebsiteWebView = () => {
    const appUrl = (process.env as any).EXPO_PUBLIC_APP_URL;
    const [date] = useState(new Date().toLocaleDateString());

    return (
        <WebView
          scrollEnabled={true}
          onError={(e) => console.error(`Failed to load WebView (WebsiteWebView.tsx) - ${JSON.stringify(e)}`)}
          allowsInlineMediaPlayback={true}
          domStorageEnabled={true}
          setBuiltInZoomControls={false}
          allowsBackForwardNavigationGestures={true}
          cacheEnabled={false}
          cacheMode='LOAD_NO_CACHE'
          incognito={true}
          useSharedProcessPool={false}
          source={{ uri: `${appUrl}?=${date}` }}
        />
      )
}