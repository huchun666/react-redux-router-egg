module.exports = (options, app) => {
   
    console.log(options);
    //返回一个异步的方法
    return async function printDate(ctx,next){


            console.log(new Date());

            await next();
    }

};