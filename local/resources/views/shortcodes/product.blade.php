<section id="newProduct">
    <div class="container mb-20">

        <div class="card">

            <!--card header-->
            <div class="card-header card-header-right-border">

                <!--header caption-->
                <div class="card-header_caption">
                    <div class="card-header_caption-title">
                        <div class="card-header_caption-text">{{$content}}
                        </div>
                    </div>
                </div>
                <div class="card-header_tools">
                    <a href="/search?sort=6">
                        مشاهده همه
                    </a>
                </div>
                <!--header caption end-->
                <!--header tools-->
                <!--header tools end-->

            </div>
            <!--card header end-->
            <!--slider and card body-->
            <div class="position-relative">
                <!-- Swiper -->
                <div class="swiper-container swiper-container-products swiper-container-horizontal swiper-container-rtl">
                    <div class="swiper-wrapper"
                         style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">

                        @php $item_row=1; @endphp
                        @foreach($sale_product as $item)
                        <!--product item-->
                        <div class="swiper-slide @if($item_row==1)swiper-slide-active @elseif($item_row==2)swiper-slide-next @endif" style="width: 260.2px;">
                            <div class="product-box product-box_hover">

                                <!--product image and badge-->
                                <a href="/product/{{$item->slug}}" class="product-box_image"
                                   data-click="showProductDetail" data-productid="{{$item->id}}" data-storeid="{{$item->id}}"
                                   data-supplier="False">
                                    <img src="{{asset($item->image)}}"
                                         alt="{{$item->title}}" width="210" height="210"
                                         class="swiper-lazy swiper-lazy-loaded">
                                    @if ($item->discount>0)
                                    <div class="product-box_discount"><span>%{{$item->discount}}<small>تخفیف</small></span></div>
                                    @endif
                                </a>
                                <!--product image and badge end-->
                                <!--product title-->
                                <a href="/product/{{$item->slug}}" data-click="showProductDetail"
                                   class="product-box_title text-dark"><h2
                                        style="font-size: 0.85rem">{{$item->title}}</h2></a>
                                <!--product title end-->
                                <!--product content-->
                                @if ($item->depot>0)
                                    <div class="product-box_content">

                                        <!--price-->
                                        <a href="/product/{{$item->slug}}" data-click="showProductDetail"
                                           data-productid="{{$item->id}}" class="product-box_price">
                                            @if ($item->discount>0)
                                                <del>{{number_format($item->price)}}</del>
                                                <div class="product-box_price-value">{{number_format($item['price'] * (100-$item['discount']) / 100)}} <span
                                                        class="product-box_price-currency">{{setting()['currency']}}</span></div>
                                            @else
                                                <div class="product-box_price-value">{{number_format($item->price)}} <span
                                                        class="product-box_price-currency">{{setting()['currency']}}</span></div>
                                            @endif

                                        </a>

                                        <!--price end-->
                                        <!--action-->
                                        <div class="product-box_action">
                                            <button onclick="addcart(this,'{{$item->id}}')" type="button" class="btn btn-gradient-primary add-to-cart pr-8 pl-8"><i class="ico ico-color_plus-circle filter-none"></i>افزودن
                                                به سبد
                                            </button>
                                        </div>
                                        <!--action btn-->

                                    </div>
                                @else
                                    <div class="product-box_content">
                                        <a href="/product/{{$item->slug}}" data-click="showProductDetail" data-productid="{{$item->id}}" class="product-box_price">
                                            <div class="product-box_price-value">تمام شد!</div>
                                        </a>
                                        <div class="product-box_action">
                                            <button type="button" class="btn btn-gradient-secondary request-quantity" data-productid="{{$item->id}}" data-storeid="{{$item->id}}" data-supplier="False">موجود کن</button>
                                        </div>
                                    </div>
                                @endif


                                <!--product content end-->

                            </div>
                        </div>
                        <!--product item end-->
                            @php $item_row++; @endphp
                         @endforeach
                    </div>

                    <!-- Add Arrows -->
                    <div class="swiper-button-next swiper-button-custom d-none d-lg-block" tabindex="0"
                         role="button" aria-label="Next slide" aria-disabled="false"></div>
                    <div class="swiper-button-prev swiper-button-custom d-none d-lg-block swiper-button-disabled"
                         tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span
                        class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span
                        class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
            <!--slider and card body end-->

        </div>

    </div>
</section>
