"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function ShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof document !== "undefined"
      ? document.title
      : "Check out this awesome content!";

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon round size={40} />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon round size={40} />
      </LinkedinShareButton>
    </div>
  );
}
