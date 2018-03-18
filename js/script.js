$('#submitBtn').click(function () {
    var url=$('#searchUrl').val();
    console.log(url);
    $.ajax({url: url,beforeSend: function() {
    
    }, success: function(result){
    
        var title = result.match(/<title>(.*?)<\/title>/);
        console.log(title,title[1].length);
        var metaDescription = $(result).filter('meta[name="description"]').attr("content");
        console.log(metaDescription);
        var titleLength;
        var metaLength;
        if(title===undefined)
        {
            title='None';
            titleLength=0;
        }
        else
        {
            titleLength=title[1].length;
        }
        if(metaDescription===undefined)
        {
            metaDescription='None';
            metaLength=0;
        }
        else
        {
            metaLength=metaDescription.length;
        }
        var suggested='Optimal length for a meta description tag is 40-300. Best length for a meta description tag is 160-300.';
        var result = `<div><p>Title:${title[1]}</p><p>Title length:${titleLength}</p><p>Meta Description:${metaDescription}</p><p>Meta Description length:${metaLength}</p><p>${suggested}</p></div>`;
        $('#details').css("display","block");
        $('#result').html($(result));

    }});
});