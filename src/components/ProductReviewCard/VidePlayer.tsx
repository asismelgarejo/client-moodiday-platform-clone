"use client";

import { ProductModel } from "@/models/Product.model";
import MuxPlayer from "@mux/mux-player-react";
import React from "react";

type VidePlayerProps = {
  data: ProductModel;
};

const VidePlayer: React.FC<VidePlayerProps> = ({ data }) => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
      poster={data.productImage}
      placeholder="https://image.mux.com/2KXKPNYvF3EvnT01t7iuAvKdiTsY02GdYEUcEjhyl5wBY/thumbnail.jpg?time=0"
      player-software-name="mux-player-react"
      style={{
        aspectRatio: "0.5625 / 1",
        height: "100%",
        maxWidth: "400px",
        width: "100%",
        position: "relative",
      }}
      player-software-version="1.8.0"
      stream-type="on-demand"
      autoPlay={false}
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    />
  );
};

export default VidePlayer;
