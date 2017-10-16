;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shensuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M378.88 394.24l261.12 0c20.48 0 30.72-10.24 30.72-25.6s-10.24-25.6-30.72-25.6L378.88 343.04c-20.48 0-30.72 10.24-30.72 25.6S363.52 394.24 378.88 394.24z"  ></path>'+
      ''+
      '<path d="M645.12 445.44 378.88 445.44c-20.48 0-30.72 10.24-30.72 25.6s10.24 25.6 30.72 25.6l261.12 0c20.48 0 30.72-10.24 30.72-25.6S660.48 445.44 645.12 445.44z"  ></path>'+
      ''+
      '<path d="M645.12 547.84 378.88 547.84c-20.48 0-30.72 10.24-30.72 25.6s10.24 25.6 30.72 25.6l261.12 0c20.48 0 30.72-10.24 30.72-25.6S660.48 547.84 645.12 547.84z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M926.72 870.4l-256-256c56.32-56.32 76.8-133.12 76.8-220.16 0-179.2-138.24-327.68-317.44-327.68S107.52 215.04 107.52 394.24s143.36 317.44 322.56 317.44c76.8 0 143.36-15.36 199.68-61.44l256 261.12c5.12 5.12 10.24 5.12 15.36 5.12 5.12 0 15.36-5.12 20.48-10.24C931.84 896 936.96 880.64 926.72 870.4L926.72 870.4zM158.72 389.12c0-148.48 122.88-271.36 271.36-271.36s271.36 122.88 271.36 271.36-122.88 271.36-271.36 271.36C276.48 660.48 158.72 537.6 158.72 389.12L158.72 389.12z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M798.72 926.72c-15.36 0-35.84-5.12-56.32-20.48-5.12 0-61.44-40.96-102.4-61.44-40.96 10.24-81.92 15.36-128 15.36-240.64 0-424.96-158.72-424.96-363.52 0-209.92 189.44-384 424.96-384s424.96 168.96 424.96 384c0 81.92-30.72 163.84-87.04 225.28L849.92 870.4c0 25.6-10.24 46.08-30.72 56.32C814.08 926.72 808.96 926.72 798.72 926.72zM650.24 788.48l10.24 5.12c40.96 25.6 107.52 71.68 112.64 71.68 20.48 15.36 30.72 10.24 30.72 10.24 0 0 0-5.12 0-10.24l0-168.96 5.12-5.12c51.2-56.32 81.92-122.88 81.92-199.68 0-184.32-168.96-332.8-373.76-332.8-204.8 0-373.76 148.48-373.76 332.8 0 179.2 158.72 312.32 373.76 312.32 40.96 0 87.04-5.12 122.88-15.36L650.24 788.48z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sc" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M844.8 302.933333 213.333333 302.933333c-17.066667 0-34.133333 12.8-34.133333 34.133333S196.266667 366.933333 213.333333 366.933333l68.266667 0 46.933333 439.466667c0 17.066667 17.066667 29.866667 29.866667 29.866667l345.6 0c17.066667 0 29.866667-12.8 29.866667-29.866667l46.933333-439.466667 59.733333 0c17.066667 0 34.133333-12.8 34.133333-34.133333S861.866667 302.933333 844.8 302.933333zM674.133333 768 388.266667 768l-42.666667-401.066667 371.2 0L674.133333 768z"  ></path>'+
      ''+
      '<path d="M392.533333 256l273.066667 0c17.066667 0 34.133333-12.8 34.133333-34.133333S682.666667 192 665.6 192L392.533333 192c-17.066667 0-34.133333 12.8-34.133333 34.133333S375.466667 256 392.533333 256z"  ></path>'+
      ''+
      '<path d="M576 669.866667C576 669.866667 576 669.866667 576 669.866667c21.333333 0 34.133333-12.8 34.133333-29.866667l21.333333-192c0-17.066667-8.533333-34.133333-29.866667-34.133333-17.066667-4.266667-34.133333 8.533333-34.133333 29.866667l-21.333333 192C546.133333 652.8 558.933333 669.866667 576 669.866667z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bj" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M797.866667 460.8c-17.066667 0-34.133333 12.8-34.133333 34.133333l0 221.866667c0 29.866667-25.6 51.2-51.2 51.2L311.466667 768c-29.866667 0-51.2-25.6-51.2-51.2L260.266667 311.466667c0-29.866667 25.6-51.2 51.2-51.2l226.133333 0c17.066667 0 34.133333-12.8 34.133333-34.133333S554.666667 196.266667 537.6 196.266667L311.466667 196.266667c-64 0-119.466667 51.2-119.466667 119.466667l0 401.066667c0 64 51.2 119.466667 119.466667 119.466667l401.066667 0c64 0 119.466667-51.2 119.466667-119.466667l0-221.866667C827.733333 473.6 814.933333 460.8 797.866667 460.8z"  ></path>'+
      ''+
      '<path d="M375.466667 640c4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 21.333333-8.533333l375.466667-375.466667c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L375.466667 597.333333C366.933333 610.133333 366.933333 627.2 375.466667 640z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-cxdd" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M285.866667 499.2c-8.533333-17.066667-25.6-21.333333-42.666667-12.8s-21.333333 25.6-12.8 42.666667c25.6 51.2 64 98.133333 110.933333 128 4.266667 4.266667 12.8 4.266667 17.066667 4.266666 8.533333 0 21.333333-4.266667 25.6-12.8 8.533333-12.8 8.533333-34.133333-8.533333-42.666666-38.4-29.866667-68.266667-64-89.6-106.666667z" fill="" ></path>'+
      ''+
      '<path d="M942.933333 904.533333l-174.933333-170.666666c68.266667-72.533333 106.666667-166.4 106.666667-273.066667 0-72.533333-21.333333-145.066667-59.733334-209.066667-8.533333-17.066667-29.866667-21.333333-42.666666-8.533333-17.066667 8.533333-21.333333 29.866667-8.533334 42.666667 34.133333 51.2 51.2 115.2 51.2 174.933333 0 183.466667-149.333333 332.8-332.8 332.8s-332.8-149.333333-332.8-332.8C145.066667 277.333333 294.4 128 477.866667 128c17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133334-217.6 0-396.8 179.2-396.8 396.8 0 217.6 179.2 396.8 396.8 396.8 89.6 0 174.933333-29.866667 243.2-85.333333l174.933333 174.933333c4.266667 4.266667 12.8 8.533333 21.333333 8.533334s17.066667-4.266667 21.333334-8.533334c17.066667-4.266667 17.066667-25.6 4.266666-38.4z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ddsh" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M857.6 810.666667H554.666667v-294.4c93.866667-17.066667 166.4-98.133333 166.4-196.266667 0-110.933333-89.6-200.533333-200.533334-200.533333S320 209.066667 320 320c0 98.133333 72.533333 183.466667 166.4 196.266667V810.666667h-298.666667c-17.066667 0-34.133333 12.8-34.133333 34.133333 0 17.066667 12.8 34.133333 34.133333 34.133333h669.866667c17.066667 0 34.133333-12.8 34.133333-34.133333-4.266667-21.333333-17.066667-34.133333-34.133333-34.133333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fptj" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M866.133333 324.266667s-4.266667 0 0 0l-4.266666-4.266667h-4.266667l-4.266667-4.266667s-4.266667 0-4.266666-4.266666h-4.266667-4.266667-4.266666c-4.266667 0-4.266667 0-4.266667 4.266666h-4.266667l-4.266666 4.266667h-4.266667l-256 234.666667-119.466667-119.466667c-12.8-12.8-34.133333-12.8-46.933333 0l-149.333333 149.333333c-12.8 12.8-12.8 34.133333 0 46.933334 8.533333 4.266667 17.066667 8.533333 25.6 8.533333 8.533333 0 17.066667-4.266667 21.333333-8.533333l128-128 119.466667 119.466666c12.8 12.8 29.866667 12.8 42.666666 0l243.2-226.133333c21.333333 46.933333 34.133333 98.133333 34.133334 149.333333 0 192-157.866667 349.866667-349.866667 349.866667-192 0-349.866667-157.866667-349.866667-349.866667 0-192 157.866667-349.866667 349.866667-349.866666 17.066667 0 34.133333-12.8 34.133333-34.133334-4.266667-21.333333-17.066667-34.133333-34.133333-34.133333-230.4 0-413.866667 187.733333-413.866667 413.866667s187.733333 413.866667 413.866667 413.866666 413.866667-187.733333 413.866667-413.866666c0-76.8-21.333333-149.333333-59.733334-217.6z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fpsh" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M866.133333 294.4s-4.266667 0 0 0c-4.266667-4.266667-4.266667-4.266667 0 0-4.266667-4.266667-4.266667-4.266667-4.266666-8.533333l-4.266667-4.266667s-4.266667 0-4.266667-4.266667h-4.266666-8.533334-4.266666-4.266667-4.266667l-337.066666 290.133334L341.333333 435.2c-12.8-12.8-34.133333-12.8-46.933333 0-12.8 12.8-12.8 34.133333 0 46.933333l162.133333 162.133334c4.266667 4.266667 12.8 8.533333 21.333334 8.533333s12.8-4.266667 21.333333-8.533333l328.533333-281.6c21.333333 46.933333 34.133333 98.133333 34.133334 149.333333 0 192-157.866667 349.866667-349.866667 349.866667-192 0-349.866667-157.866667-349.866667-349.866667 0-192 157.866667-349.866667 349.866667-349.866667 17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133333-230.4 0-413.866667 187.733333-413.866667 413.866666 0 230.4 187.733333 413.866667 413.866667 413.866667 230.4 0 413.866667-187.733333 413.866667-413.866667 0-72.533333-21.333333-149.333333-59.733334-213.333333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fzxx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M516.266667 396.8m-55.466667 0a55.466667 55.466667 0 1 0 110.933333 0 55.466667 55.466667 0 1 0-110.933333 0Z" fill="" ></path>'+
      ''+
      '<path d="M486.4 533.333333v174.933334c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333v-174.933334c0-17.066667-12.8-34.133333-34.133334-34.133333s-34.133333 17.066667-34.133333 34.133333z" fill="" ></path>'+
      ''+
      '<path d="M866.133333 294.4c-8.533333-17.066667-29.866667-21.333333-42.666666-8.533333-17.066667 8.533333-21.333333 29.866667-8.533334 42.666666 34.133333 55.466667 51.2 119.466667 51.2 183.466667 0 192-157.866667 349.866667-349.866666 349.866667S162.133333 704 162.133333 512c0-192 157.866667-349.866667 349.866667-349.866667 17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133333-230.4 0-413.866667 187.733333-413.866667 413.866666 0 230.4 187.733333 413.866667 413.866667 413.866667 230.4 0 413.866667-187.733333 413.866667-413.866667 0-72.533333-21.333333-149.333333-59.733334-213.333333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fplr" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M866.133333 294.4s-4.266667 0 0 0c-4.266667-4.266667-4.266667-4.266667 0 0-4.266667-4.266667-4.266667-4.266667-4.266666-8.533333l-4.266667-4.266667s-4.266667 0-4.266667-4.266667h-4.266666-4.266667-4.266667-4.266666-4.266667-4.266667L456.533333 597.333333c-12.8 12.8-12.8 29.866667-4.266666 46.933334 4.266667 8.533333 17.066667 12.8 25.6 12.8 8.533333 0 12.8-4.266667 21.333333-8.533334l328.533333-281.6c21.333333 46.933333 34.133333 98.133333 34.133334 149.333334 0 192-157.866667 349.866667-349.866667 349.866666-192 0-349.866667-157.866667-349.866667-349.866666 0-192 157.866667-349.866667 349.866667-349.866667 17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133334-230.4 0-413.866667 187.733333-413.866667 413.866667 0 230.4 187.733333 413.866667 413.866667 413.866667 230.4 0 413.866667-187.733333 413.866667-413.866667 0-76.8-21.333333-153.6-59.733334-217.6z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ddshsz" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M866.133333 311.466667c-8.533333-17.066667-29.866667-21.333333-42.666666-8.533334-17.066667 8.533333-21.333333 29.866667-8.533334 42.666667 34.133333 55.466667 51.2 119.466667 51.2 183.466667 0 192-157.866667 349.866667-349.866666 349.866666-192 0-349.866667-157.866667-349.866667-349.866666 0-192 157.866667-349.866667 349.866667-349.866667 17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133334-230.4 0-413.866667 187.733333-413.866667 413.866667 0 230.4 187.733333 413.866667 413.866667 413.866667 230.4 0 413.866667-187.733333 413.866666-413.866667-4.266667-72.533333-25.6-149.333333-64-213.333333z" fill="" ></path>'+
      ''+
      '<path d="M290.133333 529.066667c0 17.066667 12.8 34.133333 34.133334 34.133333h379.733333c17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133334h-384c-17.066667 0-29.866667 17.066667-29.866667 34.133334z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jsgl" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M477.866667 588.8c64 0 123.733333-25.6 166.4-68.266667 46.933333-42.666667 68.266667-102.4 68.266666-166.4s-25.6-123.733333-68.266666-166.4c-42.666667-46.933333-102.4-68.266667-166.4-68.266666s-123.733333 25.6-166.4 68.266666c-46.933333 38.4-72.533333 98.133333-72.533334 162.133334s25.6 123.733333 68.266667 166.4c46.933333 46.933333 106.666667 72.533333 170.666667 72.533333z m0-418.133333c98.133333 0 179.2 81.066667 179.2 179.2 0 98.133333-81.066667 179.2-179.2 179.2-98.133333 0-179.2-81.066667-179.2-179.2C298.666667 251.733333 379.733333 170.666667 477.866667 170.666667zM315.733333 580.266667c-46.933333 21.333333-93.866667 51.2-132.266666 89.6-38.4 38.4-68.266667 81.066667-89.6 132.266666-12.8 34.133333-21.333333 64-29.866667 98.133334-4.266667 17.066667 12.8 34.133333 29.866667 34.133333 12.8 0 25.6-8.533333 29.866666-25.6 4.266667-29.866667 12.8-59.733333 25.6-85.333333 17.066667-42.666667 42.666667-81.066667 76.8-110.933334 34.133333-34.133333 72.533333-59.733333 115.2-76.8 17.066667-8.533333 21.333333-25.6 17.066667-38.4-8.533333-17.066667-25.6-21.333333-42.666667-17.066666zM938.666667 482.133333c-12.8-12.8-34.133333-8.533333-46.933334 4.266667l-307.2 379.733333L409.6 725.333333c-12.8-12.8-34.133333-8.533333-46.933333 4.266667-12.8 12.8-8.533333 34.133333 4.266666 46.933333l200.533334 162.133334c4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 25.6-12.8l328.533333-401.066667c12.8-21.333333 12.8-38.4-4.266666-51.2z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jgmlx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M878.933333 507.733333c-17.066667 0-29.866667 12.8-29.866666 29.866667v243.2H217.6V324.266667l294.4 234.666666s4.266667 0 4.266667 4.266667h4.266666c4.266667 0 8.533333 4.266667 12.8 4.266667 4.266667 0 8.533333 0 12.8-4.266667h4.266667s4.266667 0 4.266667-4.266667l341.333333-273.066666 4.266667-4.266667s0-4.266667 4.266666-4.266667v-4.266666-4.266667-4.266667-4.266666s0-4.266667-4.266666-4.266667v-4.266667l-4.266667-4.266666-4.266667-4.266667H157.866667v605.866667h746.666666v-298.666667c4.266667-29.866667-12.8-42.666667-25.6-42.666667z m-345.6-8.533333L273.066667 290.133333h520.533333l-260.266667 209.066667z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mlfp" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M823.466667 110.933333H200.533333c-17.066667 0-29.866667 12.8-29.866666 29.866667v738.133333c0 17.066667 12.8 34.133333 34.133333 34.133334h422.4c17.066667 0 34.133333-12.8 34.133333-34.133334 0-17.066667-12.8-34.133333-34.133333-34.133333H234.666667V174.933333h558.933333v708.266667c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333V140.8c-8.533333-17.066667-21.333333-29.866667-38.4-29.866667z" fill="" ></path>'+
      ''+
      '<path d="M281.6 460.8c4.266667 12.8 17.066667 21.333333 29.866667 21.333333h379.733333c17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133333H388.266667l17.066666-17.066667c12.8-12.8 12.8-34.133333 0-46.933333-8.533333-8.533333-29.866667-8.533333-42.666666 4.266666L290.133333 426.666667c-4.266667 4.266667-8.533333 12.8-8.533333 21.333333v12.8zM695.466667 576h-384c-17.066667 0-34.133333 12.8-34.133334 34.133333 0 17.066667 12.8 34.133333 34.133334 34.133334h307.2l-17.066667 17.066666c-12.8 12.8-12.8 34.133333 0 46.933334 4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 21.333334-8.533333l72.533333-72.533334c12.8-12.8 12.8-34.133333 0-46.933333-4.266667-12.8-12.8-12.8-21.333333-12.8z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wpcg" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M823.466667 110.933333H200.533333c-17.066667 0-29.866667 12.8-29.866666 29.866667v738.133333c0 17.066667 12.8 34.133333 34.133333 34.133334h422.4c17.066667 0 34.133333-12.8 34.133333-34.133334 0-17.066667-12.8-34.133333-34.133333-34.133333H234.666667V174.933333h558.933333v708.266667c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333V140.8c-8.533333-17.066667-21.333333-29.866667-38.4-29.866667z" fill="" ></path>'+
      ''+
      '<path d="M665.6 371.2l-209.066667 209.066667-98.133333-98.133334c-12.8-12.8-34.133333-12.8-46.933333 0-12.8 12.8-12.8 34.133333 0 46.933334l119.466666 119.466666c4.266667 4.266667 12.8 8.533333 21.333334 8.533334s17.066667-4.266667 21.333333-8.533334l230.4-230.4c21.333333-17.066667 21.333333-34.133333 8.533333-46.933333-12.8-12.8-34.133333-12.8-46.933333 0z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-scsxx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M571.733333 345.6V157.866667c0-17.066667-17.066667-29.866667-34.133333-29.866667-4.266667 0-8.533333 0-12.8 4.266667l-341.333333 153.6v558.933333h482.133333c17.066667 0 34.133333-12.8 34.133333-29.866667 0-17.066667-12.8-29.866667-34.133333-29.866666h-93.866667V413.866667l260.266667 81.066666v320c0 17.066667 12.8 29.866667 34.133333 29.866667 17.066667 0 34.133333-12.8 34.133334-29.866667v-366.933333l-328.533334-102.4zM247.466667 785.066667V324.266667l260.266666-119.466667v576H247.466667z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wpml" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M823.466667 110.933333H200.533333c-17.066667 0-29.866667 12.8-29.866666 29.866667v738.133333c0 17.066667 12.8 34.133333 34.133333 34.133334h422.4c17.066667 0 34.133333-12.8 34.133333-34.133334 0-17.066667-12.8-34.133333-34.133333-34.133333H234.666667V174.933333h558.933333v708.266667c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333V140.8c-8.533333-17.066667-21.333333-29.866667-38.4-29.866667z" fill="" ></path>'+
      ''+
      '<path d="M674.133333 379.733333H349.866667c-17.066667 0-34.133333 12.8-34.133334 34.133334 0 17.066667 12.8 34.133333 34.133334 34.133333h328.533333c17.066667 0 29.866667-12.8 29.866667-34.133333 0-17.066667-17.066667-34.133333-34.133334-34.133334zM674.133333 580.266667H349.866667c-17.066667 0-34.133333 12.8-34.133334 34.133333 0 17.066667 12.8 34.133333 34.133334 34.133333h328.533333c17.066667 0 29.866667-12.8 29.866667-34.133333s-17.066667-34.133333-34.133334-34.133333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wpps" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M930.133333 490.666667l-187.733333-170.666667h-4.266667l-4.266666-4.266667h-4.266667-4.266667-4.266666-4.266667s-4.266667 0-4.266667 4.266667l-4.266666 4.266667v4.266666l-4.266667 4.266667v337.066667h-29.866667c-17.066667 0-25.6 12.8-25.6 25.6 0 29.866667-25.6 55.466667-55.466666 55.466666-29.866667 0-55.466667-25.6-55.466667-55.466666 0-17.066667-12.8-25.6-25.6-25.6H384c-29.866667 0-42.666667 12.8-42.666667 25.6v4.266666c0 29.866667-25.6 55.466667-55.466666 55.466667-29.866667 0-55.466667-25.6-55.466667-55.466667v-4.266666c0-17.066667-12.8-25.6-25.6-25.6H145.066667V302.933333h426.666666c17.066667 0 25.6-12.8 25.6-25.6s-12.8-25.6-25.6-25.6H93.866667V725.333333h85.333333c12.8 51.2 55.466667 89.6 110.933333 89.6 51.2 0 93.866667-38.4 106.666667-89.6h81.066667c12.8 51.2 55.466667 89.6 110.933333 89.6 51.2 0 98.133333-38.4 106.666667-89.6h238.933333v-234.666666z m-51.2 179.2h-123.733333V401.066667l123.733333 110.933333v157.866667z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xcxx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M486.4 648.533333c4.266667 4.266667 12.8 8.533333 21.333333 8.533334 4.266667 0 12.8 0 17.066667-4.266667l384-264.533333c8.533333-4.266667 12.8-17.066667 12.8-25.6 0-12.8-4.266667-21.333333-17.066667-25.6l-375.466666-221.866667c-8.533333-4.266667-21.333333-4.266667-34.133334 0L145.066667 332.8c-8.533333 4.266667-12.8 17.066667-12.8 25.6 0 8.533333 4.266667 21.333333 12.8 25.6l341.333333 264.533333z m29.866667-473.6l315.733333 187.733334-320 221.866666-294.4-221.866666 298.666667-187.733334z" fill="" ></path>'+
      ''+
      '<path d="M930.133333 588.8c-8.533333-12.8-29.866667-17.066667-42.666666-8.533333l-371.2 264.533333L166.4 597.333333c-12.8-8.533333-34.133333-8.533333-42.666667 8.533334-8.533333 12.8-8.533333 34.133333 8.533334 42.666666l371.2 260.266667c4.266667 4.266667 12.8 4.266667 17.066666 4.266667 8.533333 0 12.8 0 17.066667-4.266667l388.266667-277.333333c12.8-8.533333 17.066667-29.866667 4.266666-42.666667z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zyxx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M964.266667 256c-42.666667-42.666667-115.2-42.666667-162.133334 0-21.333333 21.333333-29.866667 46.933333-34.133333 72.533333l-328.533333 72.533334-200.533334-204.8c25.6-42.666667 17.066667-98.133333-17.066666-136.533334-42.666667-46.933333-115.2-42.666667-162.133334 0-42.666667 42.666667-42.666667 115.2 0 162.133334 38.4 38.4 93.866667 42.666667 136.533334 17.066666l204.8 204.8-72.533334 328.533334c-25.6 0-51.2 12.8-72.533333 34.133333-42.666667 42.666667-42.666667 115.2 0 162.133333 42.666667 42.666667 115.2 42.666667 162.133333 0 42.666667-42.666667 42.666667-115.2 0-162.133333-8.533333-8.533333-17.066667-12.8-25.6-17.066667l68.266667-324.266666 324.266667-68.266667c4.266667 8.533333 12.8 17.066667 17.066666 25.6 42.666667 42.666667 115.2 42.666667 162.133334 0 42.666667-51.2 42.666667-123.733333 0-166.4z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wpxx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M149.333333 857.6l8.533334-251.733333c-29.866667-42.666667-46.933333-89.6-46.933334-140.8 0-166.4 187.733333-298.666667 418.133334-298.666667s418.133333 136.533333 418.133333 298.666667c0 166.4-187.733333 298.666667-418.133333 298.666666-17.066667 0-34.133333-12.8-34.133334-34.133333s12.8-34.133333 34.133334-34.133333c196.266667 0 354.133333-106.666667 354.133333-234.666667 0-132.266667-157.866667-234.666667-354.133333-234.666667S170.666667 337.066667 170.666667 469.333333c0 38.4 12.8 76.8 42.666666 110.933334l8.533334 8.533333-8.533334 187.733333 183.466667-42.666666c17.066667-4.266667 34.133333 8.533333 38.4 25.6 4.266667 17.066667-8.533333 34.133333-25.6 38.4l-260.266667 59.733333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zygl" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M793.6 132.266667H170.666667c-17.066667 0-34.133333 12.8-34.133334 34.133333v738.133333c0 17.066667 12.8 34.133333 34.133334 34.133334h422.4c17.066667 0 34.133333-12.8 34.133333-34.133334 0-17.066667-12.8-34.133333-34.133333-34.133333H204.8V196.266667h558.933333v708.266666c0 17.066667 12.8 34.133333 34.133334 34.133334 17.066667 0 34.133333-12.8 34.133333-34.133334V162.133333c-8.533333-17.066667-21.333333-29.866667-38.4-29.866666z" fill="" ></path>'+
      ''+
      '<path d="M597.333333 311.466667c-17.066667 0-34.133333 12.8-34.133333 34.133333v328.533333c0 17.066667 12.8 34.133333 34.133333 34.133334 17.066667 0 34.133333-12.8 34.133334-34.133334V341.333333c0-17.066667-17.066667-29.866667-34.133334-29.866666z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xjml" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M823.466667 110.933333H200.533333c-17.066667 0-29.866667 12.8-29.866666 29.866667v738.133333c0 17.066667 12.8 34.133333 34.133333 34.133334h422.4c17.066667 0 34.133333-12.8 34.133333-34.133334 0-17.066667-12.8-34.133333-34.133333-34.133333H234.666667V174.933333h558.933333v708.266667c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333V140.8c-8.533333-17.066667-21.333333-29.866667-38.4-29.866667z" fill="" ></path>'+
      ''+
      '<path d="M678.4 482.133333h-136.533333V345.6c0-17.066667-12.8-34.133333-34.133334-34.133333-17.066667 0-34.133333 12.8-34.133333 34.133333v136.533333h-128c-17.066667 0-34.133333 12.8-34.133333 34.133334 0 17.066667 12.8 34.133333 34.133333 34.133333h128v128c0 17.066667 12.8 34.133333 34.133333 34.133333 17.066667 0 34.133333-12.8 34.133334-34.133333v-128h136.533333c17.066667 0 34.133333-12.8 34.133333-34.133333-4.266667-21.333333-17.066667-34.133333-34.133333-34.133334z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ddshsz1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M430.933333 448c0 34.133333 21.333333 64 51.2 76.8v106.666667H375.466667c-17.066667 0-34.133333 12.8-34.133334 34.133333 0 17.066667 12.8 34.133333 34.133334 34.133333h273.066666c17.066667 0 34.133333-12.8 34.133334-34.133333 0-17.066667-12.8-34.133333-34.133334-34.133333h-106.666666v-106.666667c29.866667-12.8 51.2-42.666667 51.2-76.8 0-46.933333-38.4-81.066667-81.066667-81.066667-46.933333-4.266667-81.066667 34.133333-81.066667 81.066667z" fill="" ></path>'+
      ''+
      '<path d="M866.133333 294.4c-8.533333-17.066667-29.866667-21.333333-42.666666-8.533333-17.066667 8.533333-21.333333 29.866667-8.533334 42.666666 34.133333 55.466667 51.2 119.466667 51.2 183.466667 0 192-157.866667 349.866667-349.866666 349.866667-192 0-349.866667-157.866667-349.866667-349.866667 0-192 157.866667-349.866667 349.866667-349.866667 17.066667 0 34.133333-12.8 34.133333-34.133333 0-17.066667-12.8-34.133333-34.133333-34.133333-230.4 0-413.866667 187.733333-413.866667 413.866666 0 230.4 187.733333 413.866667 413.866667 413.866667s413.866667-187.733333 413.866666-413.866667c-4.266667-72.533333-25.6-149.333333-64-213.333333z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
