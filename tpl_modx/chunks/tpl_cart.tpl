    <div class="row">
        <div id="msCart" class="col scroll-x">

            {if !count($products)}
            <div class="alert alert-info">
                {'ms2_cart_is_empty' | lexicon}
            </div>
            {else}

            <table class="table table-borderless">
                <thead class="border-bottom">

                <tr>
                    <th scope="col">Товар</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена за единицу</th>
                    <th scope="col">Сумма</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {foreach $products as $product}
                    <tr id="$product.key">
                        <th scope="row">
                            <div class="card flex-row border-0">
                                <div class="col-3 d-none d-md-block">
                                    {if $product.image}
                                        <img class="mx-auto img-fluid" src="{$product.image}"
                                             alt="{$product.pagetitle | htmlent}"/>
                                    {else}
                                        <img class="mx-auto img-fluid" src="{$_modx->getPlaceholder('+conf_noimage')}"
                                             alt="{$product.pagetitle | htmlent}"/>
                                    {/if}
                                </div>
                                <div class="col col-lg-6">
                                    <div class="card-body py-0">
                                        <a href="{$product.id | url}"
                                           class="h6 card-title stretched-link mb-3">{$product.article | htmlent}-{$product.pagetitle | htmlent}</a>

                                            <ul class="list-unstyled">
                                                <li class="fonts-size-12 mt-1"><span>Размер:</span><span
                                                            class="float-right">{$product.size[0] | htmlent}</span>
                                                </li>
                                                {if $product.quantity[0] }
                                                <li class="fonts-size-12 mt-1"><span>Штук в м2:</span><span
                                                            class="float-right">{$product.quantity[0] | htmlent} штук</span>
                                                </li>
                                                {/if}
                                                <li class="fonts-size-12 mt-1"><span>Цвет:</span><span
                                                            class="float-right">

                                                    <ul class="list-inline mb-0 colours-wrapper ">

                                                         <!--colors-->
                                                          <li class="list-inline-item m-0">
                                                               <label for="colour" style="background-color: #{$product["option.color"]}" class="btn-colour border-r50 p-2"> </label>
                                                                <input type="hidden" name="options[colour]" value="#{$product["option.color"]}" id="colour"
                                                                       class="inut-invisible">
                                                            </li> <!--/colors-->
                                                 </ul>
                                                </span>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td class="count">
                            <form method="post" class="ms2_form" role="form">
                                <input type="hidden" name="key" value="{$product.key}">
                                <div class="btn-group quantity buttons_added border">
                                        <button type="submit" class="btn button-minus border-r0 text-gray d-block" data-field="count" name="ms2_action" value="cart/change">
                                            - </button>
                                            <input type="number" step="1" min="1" max="" name="count" value="{$product.count}" title="number" 
                                               class="text-center border-0 input-text quantity-field qty text form-control" size="4" pattern="" inputmode="">
                                        <button type="submit" class="btn button-plus border-r0 text-gray d-block" data-field="count" name="ms2_action" value="cart/change">
                                            +
                                        </button>
                                </div>
                                <button class="btn btn-sm" type="submit" name="ms2_action" value="cart/change">&#8635;</button>
                            </form>
                        </td>
                        <td> {$product.price} &#8381;</td>
                        <td>  {$total.cost}&#8381;</td>
                        <td class="remove">
                            <form method="post"  class="ms2_form">
                                <input type="hidden" name="key" value="{$product.key}">
                                <button type="submit" class="btn btn-outline-danger border-0 border-r0" name="ms2_action" value="cart/remove" title="Удалить">
                                    <i class="icon trash-icon"></i></button>
                            </form>
                        </td>
                    </tr>
                {/foreach}
                <tr class="footer">
                    <th class="total">{'ms2_cart_total' | lexicon}:</th>
                    <th class="total_count">
                        <span class="ms2_total_count">{$total.count}</span>
                        {'ms2_frontend_count_unit' | lexicon}
                    </th>
                    <th class="total_weight text-nowrap">
                        <span class="ms2_total_weight">{$total.weight}</span>
                        {'ms2_frontend_weight_unit' | lexicon}
                    </th>
                    <th class="total_cost text-nowrap" colspan="2">
                        <span class="ms2_total_cost">{$total.cost}</span>
                        {'ms2_frontend_currency' | lexicon}
                    </th>
                </tr>
                </tbody>
            </table>
            {/if}
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            {$_modx->runSnippet("!msOrder",[
                    'tpl' => '@FILE chunks/tpl_order.tpl'
            ])}
            {$_modx->runSnippet("!msGetOrder",[
            'tpl' => '@FILE chunks/tpl_getorder.tpl'
            ])}
        </div>
    </div>
