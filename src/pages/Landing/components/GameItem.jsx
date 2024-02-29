import React from "react";
import { StyledGameItem } from "@/styles/components/StyledGameItem";
import { StyledH3Left } from "@/styles/components/StyledTypography";
import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from "react-router-dom";

const GameItem = ({ item, games }) => {



  return (
    <StyledGameItem>
      <div className="game_wrapper">
        <div className="game">
          <StyledH3Left>{item.title}</StyledH3Left>
          <span className="slide_number">
            <span className="slide_number_big">{item.id}</span>/{games.length}
          </span>
          <p>{item.description}</p>
          <div className="buttons">
            <Link to={'/games/' + item.game_name} >
              <Button type={"mini"} text={"Играть"} />
            </Link>
            <span className="or">или</span>
            <div style={{ position: "relative" }}>
              <img src={item.qr_code} className="qr_code" alt="QR code" />
              <span className="about_qr_code">
                Отсканируйте QR-код, чтобы открыть игру на другом устройстве
              </span>
            </div>
          </div>
        </div>
        <LazyLoadImage
          className="game_picture"
          src={item.img}
          alt="game picture"
        />
      </div>
    </StyledGameItem>
  );
};

export default GameItem;
