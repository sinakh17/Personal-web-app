import classes from "./Services.module.css";
const Services = () => {
  return (
    <div className={classes.container}>
      <h2>لیست خدمات</h2>
      <ol>
        <li>طراحی قالب های زیبا و مدرن واکنش گرا</li>
        <li>طراحی وب برنامه های تک صفحه ای با ریکت</li>
        <li>ساخت صفحات وب برای وبسایت های شخصی و فروشگاهی و...</li>
        <li>پشتیبانی فرانت اند صفحات وب ایجاد شده توسط اینجانب</li>
      </ol>
    </div>
  );
};

export default Services;
