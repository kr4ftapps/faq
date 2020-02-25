import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import "./Question.scss";

export interface IQuestion {
  id: string;
  title: string;
  content: any;
  keywords?: string;
  opened?: boolean;
}

export const Question = (props: IQuestion) => {
  const bookmarked = `#${props.id}` === window.location.hash;

  const [opened, setOpened] = useState(bookmarked);
  const [voted, setVoted] = useState(false);

  return (
    <div id={props.id} className={`question ${opened ? "opened" : ""}`}>
      <div
        className="question-title"
        onClick={() => setOpened(!opened)}
        data-track-section="question"
        data-track-action="click"
        data-track-label="view"
        data-track-value={props.id}
      >
        {props.title}
      </div>
      <Collapse in={opened}>
        <div className="question-body">
          {props.content}

          <div className="question-footer mt-2 py-1 text-right">
            <div className={"text-muted " + (voted ? "" : "d-none")}>
              Thanks for voting!
            </div>

            <div className={"text-muted " + (voted ? "d-none" : "")}>
              Did you find this helpful?
            </div>

            <div className={voted ? "d-none" : ""}>
              <button
                className="btn btn-light btn-sm mr-2"
                data-track-section="question"
                data-track-action="click"
                data-track-label="unhelpful"
                data-track-value={props.id}
                onClick={e => setVoted(true)}
              >
                <IoMdThumbsDown className="icon" />
                No
              </button>
              
              <button
                data-track-section="question"
                data-track-action="click"
                data-track-label="helpful"
                data-track-value={props.id}
                className="btn btn-light btn-sm"
                onClick={e => setVoted(true)}
              >
                <IoMdThumbsUp className="icon" />
                Yes
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
