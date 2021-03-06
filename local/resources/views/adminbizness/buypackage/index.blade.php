@extends('adminbizness.layout.master')

@section('style')
    <link href="{{asset('css/multi-step-form.css')}}" rel="stylesheet">
    <style>
        .body .container-fluid .row  div .info-box-4{
            cursor: pointer;
        }
        [type="checkbox"] + .lbl.check{
            position: absolute;
            right: 44%;
            top: 20px;
            z-index: 1;
        }
        [type="checkbox"].filled-in:not(:checked) + .lbl:after{
            opacity: 0;
        }
        [type="checkbox"].filled-in:checked + .lbl.check:after {
            top: 0;
            border-radius: 100%;
            width: 40px;
            height: 40px;

        }
        [type="checkbox"].filled-in:checked + .check-width
        {
            background: #ffffff7a!important;
        }
        [type="checkbox"].filled-in:checked + .lbl:before {
            top: 6px;
            left: 7px;
            width: 11px;
            height: 23px;
        }
        .check-width{
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
        }
        .packages > div{
            float: right;
        }
        .packages > div .info-box-4{
            border-radius: 7px;
        }
        .level-step{
            width: 100%;
            float: right;
        }
        .level-step span{
            direction: rtl;
        }
        .info-box-4 .icon{
            right: auto;
        }

        .next-loader{
            position: absolute;
            top: 0;
            width: 100%;
            background: #ffffff73;
            z-index: 10;
            height: 100%;
            left: 0;
            text-align: center;
            padding: 65px;
            display: none;
        }
        [data-notify="container"] {

            width: auto !important;
        }
        .price_name{
            background: #8bc34a;
            padding: 7px;
            color: #fff;
            display: none;
            width: 100%;
        }

        .alert-success{
            width: 20% !important;
            text-align: center;
        }
        @media only screen and (max-width: 600px) {
            .alert-success{
                width: 50% !important;
                text-align: center;
            }
            .padding{
                padding: 0;
            }
        }
    </style>

@endsection
@section('content_buy_package')
    @if(session('buy_package_danger'))
        <div class="alert bg-red alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">??</span></button>
            {{session('buy_package_danger')}}
        </div>
    @endif
    @php
        Session::forget('buy_package_danger');
    @endphp

    <div class="row main-index">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    ???????? ????????
                </div>

                <div class="body">
                    <div class="container-fluid">
                        <!-- Counter Examples -->

                        <div class="next-loader">
                            <img style="margin-top: 83px;" src="{{asset('images/next-loader.svg')}}">
                        </div>
                        <form id="regForm_buy_package" action="{{route('buy-package.store')}}" method="post">
                        @csrf
                        <!-- One "tab" for each step in the form: -->
                            <!-- Circles which indicates the steps of the form: -->
                            <div class="level-step" style="text-align:center;margin-bottom:40px;">
                                <span class="step"></span>
                                <span class="step"></span>
                                <span class="step"></span>

                            </div>
                            <div class="tab">
                                <h5 style="line-height: 42px;">?????? ???? ???????? ?????? ?????? ???? ???????????? ????????</h5>
                                <div class="row packages">
                                    @foreach($packages as $package)
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" align="center">
                                            <div class="info-box-4" style="height: auto;">
                                                <div class="icon">
                                                    {{--                                    <i class="material-icons col-deep-purple">favorite</i>--}}
                                                </div>
                                                <div class="content" style="margin-bottom: 0 !important;width: 100%">
                                                    <input name="package" value="{{$package->id}}" type="checkbox" id="md_checkbox_{{$package->id}}" class="filled-in chk-col-green checkbox" />
                                                    <label class="check lbl" for="md_checkbox_{{$package->id}}"></label>
                                                    <label class="check check-width" for="md_checkbox_{{$package->id}}"></label>
                                                    <div class="text bold">{{$package->title}}</div>
                                                    <div class="text">{{$package->description}}</div>
                                                    <div class="text">???????? ???????? :{{number_format($package->price)}}</div>
                                                    <div class="text">+ 9 ???????? ????????????</div>
                                                    <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20"></div>
                                                    <button style="width: 100%;margin-top: 20px;margin-right: 0" type="button" class="btn btn-green waves-effect m-r-20" data-toggle="modal" data-target="#largeModal{{$package->id}}">?????????? ????????</button>
                                                </div>
                                            </div>
                                            <a target="_blank" class="btn btn-primary waves-effect" href="/printp/{{$package->id}}">?????? ????????????</a>

                                        </div>
                                    @endforeach

                                    <div class="modal fade" id="largeModal1" tabindex="-1" role="dialog">
                                        <div class="modal-dialog modal-md" role="document">
                                            <div style="border: 4px solid #61c579;border-radius: 6px" class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="color: #61c579;text-align: center" class="modal-title" id="largeModalLabel11">?????????? ?????? ???????? ???????? ?????????? ?????? ???? ??????.</h4>
                                                </div>
                                                <div class="modal-body" style="display: flex;justify-content: space-between;align-items: center">
                                                    <ul>
                                                        <li>???????????? ?????????????? ( 5 ?????? ?????????????? ???????? )</li>
                                                        <li>?????? ????????????</li>
                                                        <li>?????????? ???????????? ( 5 ???? )</li>
                                                    </ul>
                                                    <img style="max-width: 100px" class="responsive-img" src="{{asset('images/logo1.png')}}" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="largeModal2" tabindex="-1" role="dialog">
                                        <div class="modal-dialog modal-md" role="document">
                                            <div style="border: 4px solid #61c579;border-radius: 6px" class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="color: #61c579;text-align: center" class="modal-title" id="largeModalLabel11">?????????? ?????? ???????? ???????? ?????????? ?????? ???? ??????.</h4>
                                                </div>
                                                <div class="modal-body" style="display: flex;justify-content: space-between;align-items: center">
                                                    <ul>
                                                        <li>???????????? ?????????????? ( 25 ?????? ?????????????? ???????? )</li>
                                                        <li>?????? ????????????</li>
{{--                                                        <li>?????? ??????????</li>--}}
                                                        <li>???? ?????????? ???????????? ( 20 ???? )</li>
{{--                                                        <li>?????? ????????</li>--}}
                                                        <li>???????? ??????????????????</li>
                                                        <li>?????????? ?????????? ( 20 ???? )</li>
                                                        <li>??????????????????</li>
                                                        <li>???????? ????????????</li>
                                                        <li>?????? ?????? ????????????</li>
                                                        <li>???????? ???????? ??????</li>
                                                        <li>???????? ?????? ???????????? ?????? ?? ??????</li>
                                                        <li>?????? ??????????????????</li>
                                                        <li>??????????????</li>
                                                        <li>???????? ????</li>
                                                    </ul>
                                                    <img style="max-width: 100px" class="responsive-img" src="{{asset('images/logo1.png')}}" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="largeModal3" tabindex="-1" role="dialog">
                                        <div class="modal-dialog modal-md" role="document">
                                            <div style="border: 4px solid #61c579;border-radius: 6px" class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="color: #61c579;text-align: center" class="modal-title" id="largeModalLabel11">?????????? ?????? ???????? ???????? ?????????? ?????? ???? ??????.</h4>
                                                </div>
                                                <div class="modal-body" style="display: flex;justify-content: space-between;align-items: center">
                                                    <ul>
                                                        <li>???????????? ?????????????? ( 50 ?????? ?????????????? ???????? )</li>
                                                        <li>?????? ????????????</li>
{{--                                                        <li>?????? ??????????</li>--}}
                                                        <li>???? ?????????? ???????????? ( 50 ???? )</li>
{{--                                                        <li>?????? ????????</li>--}}
                                                        <li>???????? ??????????????????</li>
                                                        <li>?????????? ?????????? ( 20 ???????? )</li>
{{--                                                        <li>???? ??????</li>--}}
                                                        <li>???? ?? ??????</li>
                                                        <li>??????????????????</li>
                                                        <li>???????? ????????????</li>
                                                        <li>?????? ?????? ????????????</li>
                                                        <li>???????? ???????? ??????</li>
                                                        <li>???????? ?????? ???????????? ?????? ?? ??????</li>
                                                        <li>?????? ??????????????????</li>
                                                        <li>??????????????</li>
                                                        <li>???????? ????</li>
                                                    </ul>
                                                    <img style="max-width: 100px" class="responsive-img" src="{{asset('images/logo1.png')}}" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="largeModal4" tabindex="-1" role="dialog">
                                        <div class="modal-dialog modal-md" role="document">
                                            <div style="border: 4px solid #61c579;border-radius: 6px" class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="color: #61c579;text-align: center" class="modal-title" id="largeModalLabel11">?????????? ?????? ???????? ???????? ?????????? ?????? ???? ??????.</h4>
                                                </div>
                                                <div class="modal-body" style="display: flex;justify-content: space-between;align-items: center">
                                                    <ul>
                                                        <li>???????????? ?????????????? ( 100+ ?????? ?????????????? ???????? )</li>
                                                        <li>?????? ????????????</li>
{{--                                                        <li>?????? ??????????</li>--}}
                                                        <li>???? ???????????? ( 100+ ???? )</li>
{{--                                                        <li>?????? ????????</li>--}}
                                                        <li>???????? ??????????????????</li>
                                                        <li>?????????? ?????????? ( 100+ ???????? )</li>
                                                        <li>???????? ????????????</li>
{{--                                                        <li>???????????? ??????</li>--}}
{{--                                                        <li>???? ??????</li>--}}
                                                        <li>???? ?? ??????</li>
                                                        <li>????????</li>
                                                        <li>???? ??????</li>
{{--                                                        <li>?????????? ????????</li>--}}
                                                        <li>?????? ????????</li>
{{--                                                        <li>???????? ???????????? ?????? ????????</li>--}}
                                                        <li>?????????? ????????????</li>
                                                        <li>??????????????????</li>
                                                        <li>???????? ????????????</li>
                                                        <li>?????? ?????? ????????????</li>
                                                        <li>???????? ???????? ??????</li>
                                                        <li>???????? ?????? ???????????? ?????? ?? ??????</li>
                                                        <li>?????? ??????????????????</li>
                                                        <li>??????????????</li>
                                                        <li>???????? ????</li>
                                                    </ul>
                                                    <img style="max-width: 100px" class="responsive-img" src="{{asset('images/logo1.png')}}" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="tab">
                                <h5 style="line-height: 42px;">???????? ???????????? ???? ???????????? ????????</h5>
                                <div class="row packages">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="info-box-4">
                                            <div class="icon">
                                                <i class="material-icons col-blue">credit_card</i>
                                            </div>
                                            <div class="content">
                                                <input name="pay_style" value="1" type="checkbox" id="md_checkbox_5" class="filled-in chk-col-green" />
                                                <label class="check lbl" for="md_checkbox_5"></label>
                                                <label class="check check-width" for="md_checkbox_5"></label>
                                                <div class="text bold">???????????? ????????????</div>
                                                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500"
                                                     data-fresh-interval="20"></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="info-box-4">
                                            <div class="icon">
                                                <i class="material-icons col-blue">card_travel</i>
                                            </div>
                                            <div class="content">
                                                <input name="pay_style" value="2" type="checkbox" id="md_checkbox_6" class="filled-in chk-col-green" />
                                                <label class="check lbl" for="md_checkbox_6"></label>
                                                <label class="check check-width" for="md_checkbox_6"></label>
                                                <div class="text bold">???????????? ???? ?????? ??????</div>
                                                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500"
                                                     data-fresh-interval="20"></div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab">

                                <div style="float: right;" class="col-lg-5 col-md-5 col-sm-6 col-xs-12 padding">
                                    <button class="btn btn-success btn-lg btn-block waves-effect"  data-toggle="modal" data-target="#smallModal" type="button" style="margin-bottom: 5px;background-color: #8bc34a !important;">???????? ?????? ?????? </button>
                                    <div class="info-box-2 bg-light-green hover-expand-effect" style="border-radius: 3px;height: 120px">
                                        <i style="cursor: pointer;height: 25px;z-index: 1;" id="refresh_price" class="material-icons col-blue">autorenew</i>
                                        <div style="width: 250px;" class="content">
                                            <div class="text">???????????? ?????? ?????? ??????
                                                <h4 id="refresh_price_count">{{number_format($wallet->price)}}  ??????????</h4>
                                                <div>???????? ?????? ?????? : <span onclick="clipboard()" id="token" data-clipboard-target="#token"
                                                                          style="cursor: pointer;z-index: 1;position: relative">{{$wallet->token}}</span></div>
                                            </div>

                                        </div>
                                        <div class="icon" style="padding: 10px;">
                                            <img src="{{asset('images/debit-card.svg')}}">
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="tab">
                                <h5 style="line-height: 42px;">?????????? ???????? ?????? ???? ???????????? ????????</h5>
                                <div class="row packages">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div class="info-box-4">
                                            <div style="width: 75px;" class="icon">
                                                <img style="width: 100%;" src="{{asset('images/zarinpal.png')}}">
                                            </div>
                                            <div class="content">
                                                <input name="pay_type" value="1" type="checkbox" id="md_checkbox_zarinpall" class="filled-in chk-col-green " />
                                                <label class="check lbl" for="md_checkbox_zarinpall"></label>
                                                <label class="check check-width" for="md_checkbox_zarinpall"></label>
                                                <div class="text bold">???????? ??????</div>
                                                <div class="number count-to" data-from="0" data-to="1432" data-speed="1500"
                                                     data-fresh-interval="20"></div>

                                            </div>
                                        </div>
                                    </div>
                                    {{--     <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                             <div class="info-box-4">
                                                 <div class="icon">
                                                     <i class="material-icons col-blue">card_travel</i>
                                                 </div>
                                                 <div class="content">
                                                     <input name="pay_style" value="2" type="checkbox" id="md_checkbox_tejarat" class="filled-in chk-col-green" />
                                                     <label class="check" for="md_checkbox_tejarat"></label>
                                                     <label class="check check-width" for="md_checkbox_tejarat"></label>
                                                     <div class="text bold">??????????</div>
                                                     <div class="number count-to" data-from="0" data-to="1432" data-speed="1500"
                                                          data-fresh-interval="20"></div>

                                                 </div>
                                             </div>
                                         </div>--}}

                                </div>
                            </div>
                            <div style="overflow:auto;float: right;width: 100%;">
                                <div id="policy" style="display: none;flex-direction: row">
                                    <input style="right: 0;cursor: pointer;" type="checkbox" id="md_checkbox_30" class="filled-in chk-col-green" />
                                    <label for="md_checkbox_30"></label>
                                    <span style="margin-right: 5px">
                                        ???????????? ???? ???????????? ???????? ?? ???? ???? ????????????. ( <a href="#" style="color: #61c579">???????????? ????????????</a> )
                                    </span>
                                </div>
                                <div class="next-level-1" style="float:right;width: 100%;">

                                </div>
                            </div>

                        </form>

                        <div class="modal fade" id="smallModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog modal-sm" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="smallModalLabel"> ???????? ?????? ??????</h4>
                                    </div>
                                    <div class="modal-body">
                                        <small>?????????? (???????????? ??????????)</small>
                                        <form method="post" id="Account_charging" action="{{route('Account_charging')}}">
                                            @csrf
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input type="number" name="price" onkeyup="number_format()" class="form-control" placeholder="?????????? ???? ???????? ????????">
                                                </div>
                                            </div>
                                        </form>

                                        <span class="price_name"></span>


                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" onclick="pay()" class="btn btn-link waves-effect" style="border: 1px dashed #ccc;">????????????</button>
                                        <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">????????????</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            @endsection

            @section('script')
                <script src="{{asset('js/multi-step-form.js')}}"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>
                <script>





                    $('#md_checkbox_1').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            var id_package=$(tag).val();
                            localStorage.removeItem('id_package');
                            localStorage.setItem('id_package', id_package);
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_2').removeAttr('checked');
                            $('#md_checkbox_3').removeAttr('checked');
                            $('#md_checkbox_4').removeAttr('checked');
                            //$('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>');
                            $('#policy').css('display','flex');
                            $('#md_checkbox_30').removeAttr('checked');
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('#policy').css('display','none');
                            $('#md_checkbox_30').removeAttr('checked');
                        }

                        $('#md_checkbox_30').click(function () {
                            $('#next-setp').remove();
                            var check=this;
                            if ($(check).is(':checked')) {
                                $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>');
                                $('#next-setp').click(function () {
                                    $('#prevBtn').remove();
                                    $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                                    $('#next-setp').remove();
                                    $('.check-width').css('background','none');
                                    $('#policy').css('display','none');
                                    $('#md_checkbox_30').removeAttr('checked');



                                    $('#prevBtn').click(function () {
                                        $('#next-setp').remove();
                                        $('#prevBtn').remove();
                                        $('.check-width').css('background','none');
                                        $('#md_checkbox_1').removeAttr('checked');
                                        $('#md_checkbox_2').removeAttr('checked');
                                        $('#md_checkbox_3').removeAttr('checked');
                                        $('#md_checkbox_4').removeAttr('checked');
                                        $('#md_checkbox_5').removeAttr('checked');
                                        $('#md_checkbox_6').removeAttr('checked');
                                    });
                                });
                            } else {
                                $('#next-setp').remove();
                            }
                        });





                    });

                    $('#md_checkbox_2').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            var id_package=$(tag).val();
                            localStorage.removeItem('id_package');
                            localStorage.setItem('id_package', id_package);
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_1').removeAttr('checked');
                            $('#md_checkbox_3').removeAttr('checked');
                            $('#md_checkbox_4').removeAttr('checked');
                            $('#policy').css('display','flex');
                            $('#md_checkbox_30').removeAttr('checked');
                            // $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('#policy').css('display','none');
                            $('#md_checkbox_30').removeAttr('checked');
                        }

                        $('#md_checkbox_30').click(function () {
                            $('#next-setp').remove();
                            var check=this;
                            if ($(check).is(':checked')) {
                                $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>');
                                $('#next-setp').click(function () {
                                    $('#prevBtn').remove();
                                    $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                                    $('#next-setp').remove();
                                    $('.check-width').css('background','none');
                                    $('#policy').css('display','none');
                                    $('#md_checkbox_30').removeAttr('checked');

                                    $('#prevBtn').click(function () {
                                        $('#next-setp').remove();
                                        $('.check-width').css('background','none');
                                        $('#md_checkbox_1').removeAttr('checked');
                                        $('#md_checkbox_2').removeAttr('checked');
                                        $('#md_checkbox_3').removeAttr('checked');
                                        $('#md_checkbox_4').removeAttr('checked');
                                        $('#md_checkbox_5').removeAttr('checked');
                                        $('#md_checkbox_6').removeAttr('checked');
                                    });
                                });
                            } else {
                                $('#next-setp').remove();
                            }
                        });



                    });

                    $('#md_checkbox_3').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            var id_package=$(tag).val();
                            localStorage.removeItem('id_package');
                            localStorage.setItem('id_package', id_package);
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_1').removeAttr('checked');
                            $('#md_checkbox_2').removeAttr('checked');
                            $('#md_checkbox_4').removeAttr('checked');
                            $('#policy').css('display','flex');
                            $('#md_checkbox_30').removeAttr('checked');
                            // $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('#policy').css('display','none');
                            $('#md_checkbox_30').removeAttr('checked');
                        }

                        $('#md_checkbox_30').click(function () {
                            $('#next-setp').remove();
                            var check=this;
                            if ($(check).is(':checked')) {
                                $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>');
                                $('#next-setp').click(function () {
                                    $('#prevBtn').remove();
                                    $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                                    $('#next-setp').remove();
                                    $('.check-width').css('background','none');
                                    $('#policy').css('display','none');
                                    $('#md_checkbox_30').removeAttr('checked');

                                    $('#prevBtn').click(function () {
                                        $('#next-setp').remove();
                                        $('.check-width').css('background','none');
                                        $('#md_checkbox_1').removeAttr('checked');
                                        $('#md_checkbox_2').removeAttr('checked');
                                        $('#md_checkbox_3').removeAttr('checked');
                                        $('#md_checkbox_4').removeAttr('checked');
                                        $('#md_checkbox_5').removeAttr('checked');
                                        $('#md_checkbox_6').removeAttr('checked');
                                    });
                                });
                            } else {
                                $('#next-setp').remove();
                            }
                        });



                    });

                    $('#md_checkbox_4').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            var id_package=$(tag).val();
                            localStorage.removeItem('id_package');
                            localStorage.setItem('id_package', id_package);
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_1').removeAttr('checked');
                            $('#md_checkbox_2').removeAttr('checked');
                            $('#md_checkbox_3').removeAttr('checked');
                            $('#policy').css('display','flex');
                            $('#md_checkbox_30').removeAttr('checked');
                            // $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $('#policy').css('display','none');
                            $('#md_checkbox_30').removeAttr('checked');
                        }

                        $('#md_checkbox_30').click(function () {
                            $('#next-setp').remove();
                            var check=this;
                            if ($(check).is(':checked')) {
                                $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>');
                                $('#next-setp').click(function () {
                                    $('#prevBtn').remove();
                                    $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                                    $('#policy').css('display','none');
                                    $('#md_checkbox_30').removeAttr('checked');

                                    $('#prevBtn').click(function () {
                                        $('#next-setp').remove();
                                        $('.check-width').css('background','none');
                                        $('#md_checkbox_1').removeAttr('checked');
                                        $('#md_checkbox_2').removeAttr('checked');
                                        $('#md_checkbox_3').removeAttr('checked');
                                        $('#md_checkbox_4').removeAttr('checked');
                                        $('#md_checkbox_5').removeAttr('checked');
                                        $('#md_checkbox_6').removeAttr('checked');
                                    });
                                });
                            } else {
                                $('#next-setp').remove();
                            }
                        });



                    });




                    $('#md_checkbox_5').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_6').removeAttr('checked');
                            $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(2)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                        }
                        $('#next-setp').click(function () {
                            $('#next-setp').remove();
                            $('#prevBtn').remove();
                            $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-2)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');

                            $('#prevBtn').click(function () {
                                $('#next-setp').remove();
                                $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                                $('#prevBtn').remove();
                                $('.check-width').css('background','none');
                                $('#md_checkbox_1').removeAttr('checked');
                                $('#md_checkbox_2').removeAttr('checked');
                                $('#md_checkbox_3').removeAttr('checked');
                                $('#md_checkbox_4').removeAttr('checked');
                                $('#md_checkbox_5').removeAttr('checked');
                                $('#md_checkbox_6').removeAttr('checked');
                                $('#md_checkbox_zarinpall').removeAttr('checked');
                            });
                        });


                    });

                    $('#md_checkbox_6').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_5').removeAttr('checked');
                            $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect" style="float: left">?????????? ??????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $('#md_checkbox_4').removeAttr('checked');
                        }

                        $('#next-setp').click(function () {
                            $('#prevBtn').remove();
                            $('.next-level-1').append('<button type="button" id="prevBtn" onclick="nextPrev(-1)" class="btn bg-Gray waves-effect" style="float: right">?????????? ??????</button>');
                            $('#next-setp').remove();
                            $('.next-level-1').append('<button id="next-setp" type="button"  class="btn bg-green waves-effect pay" style="float: left">????????????</button>');
                            $('.check-width').css('background','none');

                            $('.pay').click(function () {
                                var id_package = localStorage.getItem('id_package');

                                var CSRF_TOKEN ='{{ csrf_token() }}';
                                var url='{{route('checkbag')}}';
                                var data={_token: CSRF_TOKEN,id_package:id_package};
                                $.post(url,data,function (msg) {
                                    $('.next-loader').fadeIn();
                                    if(msg=='ok'){
                                        $('#regForm_buy_package').submit();
                                    }else if(msg=='notok'){
                                        $('.next-loader').fadeOut(0);
                                        $.notify({
                                            // options
                                            message: '???????????? ?????? ???????? ???????? ???????? ?????? ?????? ?????? ???? ???????? ????????'
                                        },{
                                            // settings
                                            type: 'danger',
                                            placement: {
                                                from: "bottom",
                                                align: "right"
                                            },
                                            animate: {
                                                enter: 'animated bounceIn',
                                                exit: 'animated bounceOut'
                                            }
                                        });
                                    }else{
                                        $('.next-loader').fadeOut(0);
                                        $.notify({
                                            // options
                                            message: '?????????? ???? ?????????? ???????????? ???? ???????? ???? ???????? ???????? ?????? ???????? ???? ???????? ?????????? ???????????? ???????? ????????'
                                        },{
                                            // settings
                                            type: 'danger',
                                            placement: {
                                                from: "bottom",
                                                align: "right"
                                            },
                                            animate: {
                                                enter: 'animated bounceIn',
                                                exit: 'animated bounceOut'
                                            }
                                        });
                                    }
                                })

                            });


                            $('#prevBtn').click(function () {
                                $('#next-setp').remove();
                                $('.check-width').css('background','none');
                                $('#md_checkbox_1').removeAttr('checked');
                                $('#md_checkbox_2').removeAttr('checked');
                                $('#md_checkbox_3').removeAttr('checked');
                                $('#md_checkbox_4').removeAttr('checked');
                                $('#md_checkbox_5').removeAttr('checked');
                                $('#md_checkbox_6').removeAttr('checked');
                            });
                        });


                    });



                    $('#md_checkbox_zarinpall').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_6').removeAttr('checked');
                            $('.next-level-1').append('<button id="next-setp" type="button"  class="btn bg-green waves-effect pay" style="float: left">????????????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                        }
                        $('.pay').click(function () {
                            $('.next-loader').fadeIn();
                            $('#regForm_buy_package').submit();


                            $('#prevBtn').click(function () {
                                $('#next-setp').remove();
                                $('.check-width').css('background','none');
                                $('#md_checkbox_1').removeAttr('checked');
                                $('#md_checkbox_2').removeAttr('checked');
                                $('#md_checkbox_3').removeAttr('checked');
                                $('#md_checkbox_4').removeAttr('checked');
                                $('#md_checkbox_5').removeAttr('checked');
                                $('#md_checkbox_6').removeAttr('checked');
                            });
                        });

                        $('#prevBtn').click(function () {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $('#md_checkbox_1').removeAttr('checked');
                            $('#md_checkbox_2').removeAttr('checked');
                            $('#md_checkbox_3').removeAttr('checked');
                            $('#md_checkbox_4').removeAttr('checked');
                            $('#md_checkbox_5').removeAttr('checked');
                            $('#md_checkbox_6').removeAttr('checked');
                        });
                    });


                    $('#md_checkbox_tejarat').on('change', function() {
                        var tag=this;
                        if ($(tag).is(':checked')) {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $(tag).parent().find('.check-width').css('background','#ffffff7a');
                            $('#md_checkbox_5').removeAttr('checked');
                            $('.next-level-1').append('<button id="next-setp" type="button" onclick="nextPrev(1)" class="btn bg-green waves-effect pay" style="float: left">????????????</button>')
                        } else {
                            $(tag).parent().find('.check-width').css('background','none');
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $('#md_checkbox_4').removeAttr('checked');
                        }

                        $('#next-setp').click(function () {
                            $('#next-setp').remove();
                            $('.check-width').css('background','none');
                            $('#md_checkbox_4').removeAttr('checked');
                        });
                    });



                    $('#refresh_price').click(function () {
                        $('.hover-expand-effect').waitMe({
                            effect : 'pulse',
                            text : '???? ?????? ???????????? ...',
                            maxSize : '',
                            waitTime : 1,
                            textPos : 'vertical',
                            fontSize : '10',
                            source : '',
                        });
                        var CSRF_TOKEN ='{{ csrf_token() }}';
                        var url='{{route('refresh_price_wallet')}}';
                        var data={_token: CSRF_TOKEN};
                        $.post(url,data,function (msg) {
                            $('#refresh_price_count').html(msg + ' ?????????? ');
                            $('.waitMe').fadeOut();
                        });
                    });
                </script>


                <script>
                    function clipboard() {
                        var clipboard = new Clipboard('#token');
                        $.notify({
                            // options
                            message: '?????? ????'
                        },{
                            // settings
                            type: 'success',
                            placement: {
                                from: "bottom",
                                align: "center"
                            },
                            animate: {
                                enter: "animated fadeInUp",
                                exit: "animated fadeOutDown"
                            },
                            offset: {
                                x: 500,
                                y: 10
                            }
                        });
                    }


                    function number_format() {
                        var price=$('input[name=price]').val();
                        if ((price)>=1000){
                            var CSRF_TOKEN = '{{ csrf_token() }}';
                            var url = '{{route('number_format_price')}}';
                            var data = {_token: CSRF_TOKEN, price: price};
                            $.post(url, data, function (msg) {
                                $('.price_name').css('display','inline-block');
                                $('.price_name').html(msg + ' ?????????? ')
                            });
                        }else{
                            $('.price_name').css('display','inline-block');
                            $('.price_name').html('?????????? ?????????? 1000 ?????????? ???? ????????.')
                        }

                    }


                    function pay() {

                        var price=$('input[name=price]').val();
                        if ((price)>=1000){
                            $('#Account_charging').submit();
                            $('.waitMe').fadeOut();
                        }else{
                            $('.price_name').html('?????????? ?????????? 1000 ?????????? ???? ????????.');
                            $('.price_name').css('display','inline-block');
                            $('.waitMe').fadeOut();
                        }
                    }
                </script>
@endsection

