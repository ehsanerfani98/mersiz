@php

    $carts = Gloudemans\Shoppingcart\Facades\Cart::content();
    $countcart = Gloudemans\Shoppingcart\Facades\Cart::content()->count();
    $total_price = Gloudemans\Shoppingcart\Facades\Cart::subtotal(00);
    if(!isset($countcart)){
        $countcart = 0;
    }
    if(!isset($total_price)){
        $total_price = 0;
    }

@endphp
@extends('front.layout.master')
@section('style_link')
    <link rel="stylesheet" type="text/css" href="{{asset('front/css/responsive-rtl.css')}}" />
@endsection
@section('style')
    <style>
        .checkout__form {
            text-align: right;
        }

        .checkout h6 {
            margin-bottom: 0;
            border: none;
        }

        .card {
            background: none;
            border: none;
        }

       /* .form-control {
            display: block !important;
        }*/

        div.nice-select {
            display: none !important;
        }

        .invalid-feedback {
            display: block;
            font-size: 11px;
        }
        .invalid-feedback{
            color: red;
        }
        .panel-default>.panel-heading {
            color: #333;
            background-color: #f5f5f5;
            border-color: #ddd;
            padding: 10px 15px;
            border-bottom: 1px solid
        }
        .panel-title {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 16px;
            color: inherit;
        }
        .panel {
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
            box-shadow: 0 1px 1px rgba(0,0,0,0.05);
        }
        .panel-body {
            padding: 15px;
        }
        label {
            display: inline-block;
            max-width: 100%;
            margin-bottom: 5px;
            font-weight: bold;
            font-weight: normal;
            font-size: 15px;
        }
        div.required .control-label:before {
            content: '* ';
            color: #F00;
            font-weight: bold;
        }
        .form-control {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
            -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        }
        input[type="radio"], input[type="checkbox"] {
            margin: 4px 0 0;
            margin-top: 1px \9;
            line-height: normal;
        }
        input[type="radio"], input[type="checkbox"] {
            margin: 4px 0 0;
            margin-top: 1px \9;
            line-height: normal;
            height: 15px;
        }
        .radio, .checkbox {
            position: relative;
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .radio label, .checkbox label {
            padding-right: 20px;
            padding-left: initial;
        }
        .radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] {
            position: absolute;
            margin-left: -20px;
            margin-top: 4px \9;

        }
        .radio label, .checkbox label {
            min-height: 20px;
            padding-left: 20px;
            margin-bottom: 0;
            font-weight: normal;
            cursor: pointer;
        }
        textarea.form-control {
            height: auto;
        }
        .buttons {
            border-top: 1px solid #EEEEEE;
            overflow: auto;
            padding: 15px 6px 0px 6px;
            margin-bottom: 20px;
        }

        .body-content .my-wishlist-page .my-wishlist table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td{
            border: 1px solid #ddd;
            padding: 8px;
        }
    </style>
@endsection


@section('content')
    <div id="container">
        <div class="container">
            <!-- Breadcrumb Start-->

            <!-- Breadcrumb End-->
            <div class="row">
                <!--Middle Part Start-->
                @if($countcart!=0)
                <div id="content" class="col-sm-12">
                    <h1 class="title">?????????? ????????</h1>
                    <form action="/order-verify" method="post">
                        @csrf
                    <div class="row">
                        <div class="col-sm-4">

                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title"><i class="fa fa-user"></i> ?????????????? ???????? ??????</h4>
                                </div>
                                <div class="panel-body">
                                    <fieldset id="account">
                                        <div class="form-group required">
                                            <label for="input-payment-firstname" class="control-label">??????</label>
                                            <input type="text" class="form-control" id="input-payment-firstname"
                                                   placeholder="??????"
                                                   value="@if(old('name')==""){{$user->name}}@else{{old('name')}} @endif"
                                                   name="name">
                                            @if ($errors->has('name'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('name') }}</strong>
                                                 </span>
                                            @endif
                                        </div>
                                        <div class="form-group required">
                                            <label for="input-payment-lastname" class="control-label">??????
                                                ????????????????</label>
                                            <input type="text" class="form-control" id="input-payment-lastname"
                                                   placeholder="?????? ????????????????"
                                                   value="@if(old('family')==""){{$user->family}}@else{{old('family')}} @endif"
                                                   name="family">
                                            @if ($errors->has('family'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('family') }}</strong>
                                                 </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="input-payment-telephone" class="control-label">??????????
                                                ????????</label>
                                            <input type="text" class="form-control" id="input-payment-telephone"
                                                   placeholder="?????????? ????????"
                                                   value="@if(old('tell')==""){{$user->tell}}@else{{old('tell')}} @endif"
                                                   name="tell">

                                        </div>
                                        <div class="form-group required">
                                            <label for="input-payment-fax" class="control-label">?????????? ????????????</label>
                                            <input type="text" class="form-control" id="input-payment-fax"
                                                   placeholder="????????????"
                                                   value="@if(old('mobile')==""){{$user->mobile}}@else{{old('mobile')}} @endif"
                                                   name="mobile">
                                            @if ($errors->has('mobile'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('mobile') }}</strong>
                                                 </span>
                                            @endif
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title"><i class="fa fa-book"></i> ????????</h4>
                                </div>
                                <div class="panel-body">
                                    <fieldset id="address" class="required">


                                        <div class="form-group required">
                                            <label for="input-payment-zone" class="control-label"> ??????????</label>
                                            <select id="ostan" name="ostan_id"
                                                    class="selectpicker state ostan form-control show-tick"
                                                    data-live-search="true">
                                                <option>?????????? ???? ???????????? ????????</option>
                                            </select>
                                            @if ($errors->has('state'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('state') }}</strong>
                                                 </span>
                                            @endif
                                            <input name="state" type="hidden" value="{{$user->ostan}}">
                                        </div>
                                        <div class="form-group required">
                                            <label for="input-payment-country" class="control-label">??????</label>
                                            <select id="city" name="city_id" onchange="set_state_name()"
                                                    class="selectpicker form-control show-tick city">
                                                <option>?????????? ?????????? ???? ???????????? ????????</option>
                                            </select>
                                            @if ($errors->has('city'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('city') }}</strong>
                                                 </span>
                                            @endif
                                            <input name="city" type="hidden" value="{{$user->city}}"></div>
                                        <div class="form-group required">
                                            <label for="input-payment-address-1" class="control-label">???????? 1</label>
                                            <textarea type="text" class="form-control" id="input-payment-address-1"
                                                      placeholder="???????? ???????? ????????"
                                                      name="address">@if(old('address')==""){{$user->address}}@else{{old('address')}} @endif</textarea>
                                            @if ($errors->has('address'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('address') }}</strong>
                                                 </span>
                                            @endif
                                        </div>

                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-truck"></i> ???????? ?? ??????????</h4>
                                        </div>
                                        <div class="panel-body">
                                            <p>?????????? ?????????? ?????????????? ????????
                                                ?????????? {{number_format($setting['send_price_top'])}} ?????????? </p>

                                            <?php $tp = [] ?>
                                            @foreach($carts as $cart)
                                                @php
                                                $tp[]=$cart->price*$cart->qty;
                                            @endphp
                                            @endforeach
                                            @if(array_sum($tp)<$setting['send_price_top'])
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="Flat Shipping Rate" checked>
                                                    ?????????? ?? ???????? - {{$setting['send_price']}} ??????????</label>
                                            </div>
                                            @else
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio"  checked> ????????????</label>
                                                </div>
                                            @endif

                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-credit-card"></i> ???????? ????????????</h4>
                                        </div>
                                        <div class="panel-body">
                                            <p>???????? ???? ???????? ???????????? ???????? ?????????? ?????? ???????????? ????????.</p>
                                            @if(@$setting['pay_home']=='true')
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="pay_home" value="true">
                                                        ???????????? ?????????? ??????????</label>
                                                </div>
                                            @endif
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="pay_home" checked="checked"
                                                           value="Paypal">
                                                    ???????? ??????</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {{--      <div class="col-sm-12">
                                          <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <h4 class="panel-title"><i class="fa fa-ticket"></i> ?????????????? ???? ???????? ??????????</h4>
                                              </div>
                                              <div class="panel-body">
                                                  <label for="input-coupon" class="col-sm-3 control-label">???? ?????????? ?????? ???? ???????? ????????</label>
                                                  <div class="input-group">
                                                      <input type="text" class="form-control" id="input-coupon" placeholder="???? ?????????? ?????? ???? ???? ?????????? ???????? ????????" value="" name="coupon">
                                                      <span class="input-group-btn">
                                <input type="button" class="btn btn-primary" data-loading-text="???????????????? ..." id="button-coupon" value="?????????? ????????">
                                </span></div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-sm-12">
                                          <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <h4 class="panel-title"><i class="fa fa-gift"></i> ?????????????? ???? ???????? ????????</h4>
                                              </div>
                                              <div class="panel-body">
                                                  <label for="input-voucher" class="col-sm-3 control-label">???? ???????? ???????? ?????? ???? ???????? ????????</label>
                                                  <div class="input-group">
                                                      <input type="text" class="form-control" id="input-voucher" placeholder="???? ???????? ???????? ?????? ???? ???? ?????????? ???????? ????????" value="" name="voucher">
                                                      <span class="input-group-btn">
                                <input type="submit" class="btn btn-primary" data-loading-text="???????????????? ..." id="button-voucher" value="?????????? ???????? ????????">
                                </span> </div>
                                              </div>
                                          </div>
                                      </div>--}}
                                <div class="col-sm-12">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-shopping-cart"></i> ?????? ????????</h4>
                                        </div>
                                        <div class="panel-body">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <td class="text-center">??????????</td>
                                                        <td class="text-left">?????? ??????????</td>
                                                        <td class="text-left">??????????</td>
                                                        <td style="text-align: center" class="text-right">???????? ????????</td>
                                                        <td style="text-align: center" class="text-right">????</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>


                                                    @foreach($carts as $cart)
                                                        <tr>
                                                            <td class="text-center"><a target="_blank" href="/product/{{$cart->options->product_slug}}"><img style="width: 130px"
                                                                        src="{{asset($cart->options->image)}}"
                                                                        alt="{{$cart->name}}" title="{{$cart->name}}"
                                                                        class="img-thumbnail"></a></td>
                                                            <td class="text-left"><a target="_blank" href="/product/{{$cart->options->product_slug}}">{{$cart->name}}</a></td>
                                                            <td class="text-left">{{$cart->qty}}</td>
                                                            <td style="min-width: 140px;text-align: center" class="text-right">{{number_format($cart->price)}} ??????????</td>
                                                            <td style="min-width: 140px;text-align: center" class="text-right">{{number_format($cart->price*$cart->qty)}} ??????????</td>
                                                        </tr>

                                                    @endforeach
                                                    </tbody>
                                                    <tfoot>
                                                    <tr>
                                                        <td class="text-right" colspan="4"><strong>?????? ????:</strong></td>
                                                        <td class="text-right">{{$total_price}} ??????????</td>
                                                    </tr>
                                                    <tr>

                                                        <td class="text-right" colspan="4"><strong>?????????? ?????????? ????????
                                                                :</strong></td>
                                                            @if(array_sum($tp)<$setting['send_price_top'])
                                                        <td class="text-right">{{$setting['send_price']}} ??????????</td>
                                                        @else
                                                            <td class="text-right">????????????</td>
                                                        @endif
                                                    </tr>
                                                    {{-- <tr>
                                                         <td class="text-right" colspan="4"><strong>?????? ????????:</strong></td>
                                                         <td class="text-right">4000 ??????????</td>
                                                     </tr>--}}
                                                    {{--<tr>
                                                        <td class="text-right" colspan="4"><strong>????????????:</strong></td>
                                                        <td class="text-right">15100 ??????????</td>
                                                    </tr>--}}
                                                    <tr>
                                                        <td class="text-right" colspan="4"><strong>???? :</strong></td>
                                                        @php
                                                            if (array_sum($tp)<$setting['send_price_top']){
                                                                $Total=filter_var($total_price, FILTER_SANITIZE_NUMBER_INT);
                                                                  $Total=$Total+$setting['send_price'];
                                                                  }else{
                                                                $Total=filter_var($total_price, FILTER_SANITIZE_NUMBER_INT);
                                                                  }
                                                        @endphp
                                                        <td class="text-right">{{number_format($Total)}} ??????????</td>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-pencil"></i> ???????????? ?????????? ????????
                                                ??????????.</h4>
                                        </div>
                                        <div class="panel-body">
                                            <textarea rows="4" class="form-control" id="confirm_comment"
                                                      name="description"></textarea>
                                            <br>
                                            <label class="control-label" for="confirm_agree">
                                                <input style="width: 35px;" type="checkbox" checked="checked" value="1" required=""
                                                       class="validate required" id="confirm_agree"
                                                       name="confirm agree">
                                                <span><a class="agree" href="#"><b>?????????? ?? ????????????</b></a> ???? ???????????? ???? ?? ???? ???????? ?????????? ????????.</span>
                                            </label>
                                            <div class="buttons">
                                                <div class="pull-right">
                                                    <input type="submit"  id="pay_price" class="btn btn-primary site-btn"
                                                           value="?????????? ??????????">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <!--Middle Part End -->
                @else
                    <div class="checkout__form">
                        <h4>?????? ???????? ?????? ???????? ???? ????????!</h4>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <!-- Checkout Section End -->
@endsection



@section('script_link')
    <script src="{{asset(('js/frotel/ostan.js'))}}"></script>
    <script src="{{asset('js/frotel/city.js')}}"></script>
@endsection
@section('script')
    <script>
        $('#pay_home').click(function () {
            if (this.checked) {
                $('#pay_price').hide();
                $('#pay_home_price').show();
            } else {
                $('#pay_price').show();
                $('#pay_home_price').hide()
            }

        });
    </script>

    <script>

        loadOstan('ostan');
        $("#ostan").change(function () {
            var i = $(this).find('option:selected').val();
            ldMenu(i, 'city');
            $('.selectpicker').selectpicker('refresh');
        });

        function set_state_name() {
            var ostan_name = $('#ostan option:selected').text();
            var city_name = $('#city option:selected').text();
            $('input[name=city]').val(city_name);
            $('input[name=state]').val(ostan_name);
        }

        $('#ostan option').each(function (index) {

            var value_ostan = $(this).val();
            var state = '{{$user->ostan_id}}';
            if (value_ostan == state) {
                $(this).attr('selected', 'selected');
                ldMenu(value_ostan, 'city');

            }


        });

        $('.city option').each(function (index) {
            var city = '{{$user->city_id}}';
            var city_value = $(this).val();
            if (city_value == city) {
                $(this).attr('selected', 'selected');
                $('.selectpicker').selectpicker('refresh');
            }
        });

    </script>
@endsection
