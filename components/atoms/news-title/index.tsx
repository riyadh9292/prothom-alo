import { FunctionComponent } from "react";
import Label from "../label";
import styles from "./NewsTitle.module.scss";

interface NewsTitleProps {
  headline: string;
  subheadline: string;
  labelClassName?: string;
  subLabelclass?: string;
}

const NewsTitle: FunctionComponent<NewsTitleProps> = ({
  headline,
  subheadline,
  labelClassName,
  subLabelclass,
}) => {
  return (
    <div className={styles.headlineContainer}>
      <p>
        {subheadline && (
          <span className={subLabelclass || styles.subheadline}>
            {subheadline + "  / "}
          </span>
        )}
        <span className={labelClassName || styles.headline}>{headline}</span>
        {/* <span
          className={
            labelClassName ||
            (styles.headline + subheadline && subLabelclass) ||
            styles.red
          }
        >
          {headline}
        </span> */}
      </p>
      {/* <Label
        value={headline}
        className={labelClassName + subheadline && subLabelclass}
      />
      {subheadline && (
        <>
          <Label
            value={"  / " + subheadline}
            className={styles.subheadline + " " + labelClassName}
          />
        </>
      )} */}
    </div>
  );
};

export default NewsTitle;
