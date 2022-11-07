import classes from "./Samples.module.css";
const Samples = () => {
  return (
    <div className={classes.container}>
      برای مشاهده نمونه کارهای اینجانب
      <a href="https://github.com/sinakh17?tab=repositories" target="_blank">
        {" "}
        اینجا{" "}
      </a>
      را کلیک کنید و از صفحه گیت هاب من دیدن فرمایید
    </div>
  );
};

export default Samples;
