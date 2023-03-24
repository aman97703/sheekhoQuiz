import {
  ArrowBack,
  BookmarkBorderOutlined,
  DescriptionOutlined,
  EmojiEvents,
  FileCopyOutlined,
  HelpOutlineOutlined,
  Info,
  MessageOutlined,
  Search,
  WatchLaterOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Drawer, IconButton, Rating } from "@mui/material";
import React, { useState } from "react";
import coverBg from "../Assets/Images/detailsCover.jpg";
import girlImage from "../Assets/Images/girl.png";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startQuiz } from "../features/scoreSlice";

const Details = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDrawer = (open) => {
    setState(open);
  };
  return (
    <div className="details_root">
      <div className="details_header d-flex align-items-center justify-content-between">
        <IconButton>
          <ArrowBack />
        </IconButton>
        <div className="d-flex align-items-center">
          <span>
            <Search />
          </span>
          <img
            src="https://fastly.picsum.photos/id/574/32/32.jpg?hmac=DMtrO5zpVlqPkZDFBGaFraRVGvLhdO_OfLVEDcn4pWo"
            alt="logo"
            className="img_32 ml-12"
          />
        </div>
      </div>
      <div
        className="details_cover"
        style={{ backgroundImage: `url(${coverBg})` }}
      >
        <div className="d-flex justify-content-between">
          <p className="cover_text">
            The <span className="cover_special_text">Daily</span> MS
            <br />
            <span className="cover_special_text">Excel Quiz</span>
          </p>
          <img src={girlImage} alt="girl" />
        </div>
      </div>
      <div className="pl-16 pr-16 mt-24 details_main">
        <p className="title">The Daily MS Excel Quiz</p>
        <div className="mt-24">
          <div className="d-flex justify-content-between">
            <div className="">
              <p className="caption">
                <span className="mr-12">
                  <MessageOutlined fontSize="small" />
                </span>
                Leave a Commment
              </p>
              <p className="caption mt-12">
                <span className="mr-12">
                  <BookmarkBorderOutlined fontSize="small" />
                </span>
                Save Quiz
              </p>
              <p className="caption mt-12">
                <span className="mr-12">
                  <EmojiEvents fontSize="small" />
                </span>
                Challenge a Friend
              </p>
            </div>
            <div className="mr-12">
              <div className="d-flex flex-column align-items-center">
                <AvatarGroup total={100} className="details_avatar_group">
                  {[1, 1, 1].map(() => (
                    <Avatar
                      key={nanoid()}
                      src="https://fastly.picsum.photos/id/574/32/32.jpg?hmac=DMtrO5zpVlqPkZDFBGaFraRVGvLhdO_OfLVEDcn4pWo"
                      className="details_avatar_"
                      style={{
                        height: 28,
                        width: 28,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <p className="overline">People Enrolled</p>
              </div>
              <div>
                <Rating max={5} name="rating" value={5} readOnly size="small" />
                <p className="overline">3 Ratings (5.0)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <p className="body2 color_grey_70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            natus inventore nobis sequi. Ducimus dicta magni optio sunt dolores,
            sint at repudiandae nemo quae, deserunt minus quod vitae ex ea?
          </p>
        </div>
        <div className="mt-24">
          <p className="body2 color_dark_grey" style={{ fontWeight: "bold" }}>
            This Quiz Includes
          </p>
          <div>
            <p className="body2_semi_bold mt-16">
              <span className="mr-12">
                <DescriptionOutlined />
              </span>
              50% Passing Percentage
            </p>
            <p className="body2_semi_bold mt-16">
              <span className="mr-12">
                <HelpOutlineOutlined />
              </span>
              5 Questions
            </p>
            <p className="body2_semi_bold mt-16">
              <span className="mr-12">
                <WatchLaterOutlined />
              </span>
              1 Mins
            </p>
            <p className="body2_semi_bold mt-16">
              <span className="mr-12">
                <FileCopyOutlined />
              </span>
              1 Attempt Daily
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-40 mt-24">
            <button className="btn_primary" onClick={() => toggleDrawer(true)}>
              Take Quiz
            </button>
          </div>
        </div>
      </div>
      <Drawer
        anchor={"bottom"}
        open={state}
        onClose={() => toggleDrawer(false)}
        className="details_drawer_root"
      >
        <div className="details_drawer_main">
          <div>
            <p className="title color_dark_grey">Quiz Rules</p>
            <div className="d-flex align-items-center mt-40">
              <div className="details_drawer_iconmain mr-16">
                <WatchLaterOutlined fontSize="large" />
              </div>
              <div>
                <p className="body2 color_dark_grey">1 Mins</p>
                <p className="caption">
                  Keep in mind that it's time-bound quiz
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-24">
              <div className="details_drawer_iconmain mr-16">
                <HelpOutlineOutlined fontSize="large" />
              </div>
              <div>
                <p className="body2 color_dark_grey">5 Questions</p>
                <p className="caption">We believe that you will ace it!</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-24">
              <div className="details_drawer_iconmain mr-16">
                <WorkspacePremiumOutlined fontSize="large" />
              </div>
              <div>
                <p className="body2 color_dark_grey">50% Passing Criteria</p>
                <p className="caption">
                  All the best! See you on the other side
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-24">
              <div className="details_drawer_info d-flex align-items-center">
                <span className="mr-12">
                  <Info fontSize="small" />
                </span>
                <p className="overline">
                  This quiz can be attempted once daily
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-24">
              <button
                className="btn_primary"
                onClick={() => {
                  dispatch(startQuiz());
                  navigate(`/quiz`);
                }}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Details;
