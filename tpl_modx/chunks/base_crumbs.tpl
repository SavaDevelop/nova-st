<div class="container-fluid container-xl">
    <nav class="pt-3" aria-label="breadcrumb">
        {$_modx->runSnippet("pdoCrumbs", [
        'showHome' => 1,
        'tpl' => '@INLINE <li class="breadcrumb-item text-muted"><a class="text-decoration-none text-reset" href="{$link}">{$menutitle}</a></li>',
        'tplCurrent' => '@INLINE <li class="breadcrumb-item text-muted active" aria-current="page">{$menutitle}</li>',
        'tplWrapper' => '@INLINE <ol class="breadcrumb bg-transparent px-0 pb-0 mb-0">{$output}</ol>'
        ])}
    </nav>
</div>