{
    window.onresize = ()=>{
        getWidthAndHeightForLandingPageDivs();
    };
    getWidthAndHeightForLandingPageDivs();
    $('#btnBarChart').click(()=>{
        showMainChartAndHideOthers('btnBarChart');
    });
    $('#btnPieChart').click(()=>{
        showMainChartAndHideOthers('btnPieChart');
    });
    $('#btnLineChart').click(()=>{
        showMainChartAndHideOthers('btnLineChart');
    });
    $('#firstList').click(()=>{
        showVideoAndHideOthers('firstList');
    });
    $('#secondList').click(()=>{
        showVideoAndHideOthers('secondList');
    });
    $('#btnShow').click(()=>{
        $('#menuOne').removeClass('showMenu').addClass('hideMenu');
        $('#menuTwo').removeClass('showMenu').addClass('hideMenu');
        $('#navMenu').removeClass('displayNone').removeClass('hideMenu');
        setTimeout(()=>{
            $('#navMenu').addClass('showMenu')
        }, 500);
    });
    $('#btnClose').click(()=>{
        $('#navMenu').removeClass('showMenu').addClass('hideMenu');
        
        setTimeout(()=>{
            $('#navMenu').addClass('displayNone');
            $('#menuOne').removeClass('hideMenu').addClass('showMenu');
            $('#menuTwo').removeClass('hideMenu').addClass('showMenu');
        }, 500);
    });
    $('#navMenu .menuItem').click(()=>{
        $('#navMenu').removeClass('showMenu').addClass('hideMenu');
        
        setTimeout(()=>{
            $('#navMenu').addClass('displayNone');
            $('#menuOne').removeClass('hideMenu').addClass('showMenu');
            $('#menuTwo').removeClass('hideMenu').addClass('showMenu');
        }, 500);
    })

    function showMainChartAndHideOthers(btn){
        let buttons = ['btnBarChart', 'btnPieChart', 'btnLineChart'];
        let charts = ['boxOfficeBarChart', 'boxOfficePieChart', 'boxOfficeLineChart'];
        for(let i = 0; i < buttons.length; i++){
            if(btn !== buttons[i]){
                let parentDiv = $('#' + charts[i]).parent();
                let buttonParentDiv = $('#' + buttons[i]).parent();
                if(!parentDiv.hasClass('displayNone')){
                    parentDiv.addClass('displayNone');
                }
                buttonParentDiv.removeClass('active');
            }
            if(btn === buttons[i]){
                $('#' + btn).parent().addClass('active');
                $('#activeIcon').appendTo($('#' + btn).parent());
                if($('#' + charts[i]).parent().hasClass('displayNone')){
                    $('#' + charts[i]).parent().removeClass('displayNone');
                }
            }
        } 
    }
    function showVideoAndHideOthers(listImg){
        let listImgs = ['firstList', 'secondList'];
        let listVideos = ['videoOne', 'videoTwo'];
        for(let i = 0; i < listImgs.length; i++){
            if(listImg !== listImgs[i]){
                let videoToHide = $('#' + listVideos[i]);
                if(!videoToHide.hasClass('displayNone')){
                    videoToHide.addClass('displayNone');
                    $('#' + listImgs[i]).removeClass('activeList');
                    console.log($('#' + listImgs[i]).hasClass('activeList'));
                }
            }
            if(listImg === listImgs[i]){
                let videoToShow = $('#' + listVideos[i]);
                if(videoToShow.hasClass('displayNone')){
                    videoToShow.removeClass('displayNone');
                    $('#' + listImgs[i]).addClass('activeList');
                    // console.log(listImgs[i].hasClass('activeList'));
                }
            }
        }
    }
    function getWidthAndHeightForLandingPageDivs(){
        let headerHeight = Number($('header').css('height').slice(0,-2));
        $('#menuOne').css('height', Math.sqrt((headerHeight/2) * (headerHeight/2) / 2) + 'px');
        $('#menuOne').css('width', Math.sqrt((headerHeight/2) * (headerHeight/2) / 2) + 'px');
        $('#menuTwo').css('height', Math.sqrt((headerHeight/2) * (headerHeight/2) / 2) + 'px');
        $('#menuTwo').css('width', Math.sqrt((headerHeight/2) * (headerHeight/2) / 2) + 'px');
    }
}
