'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">iwnil documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-38d836c9555a93b669be3dd38fa252a0d402338263d9f454d266d69ebdee49869eb1b8abf9b1a35f87eba54f576530fe2226c22b2b393f08a9c2642ed6e765c3"' : 'data-bs-target="#xs-components-links-module-AppModule-38d836c9555a93b669be3dd38fa252a0d402338263d9f454d266d69ebdee49869eb1b8abf9b1a35f87eba54f576530fe2226c22b2b393f08a9c2642ed6e765c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-38d836c9555a93b669be3dd38fa252a0d402338263d9f454d266d69ebdee49869eb1b8abf9b1a35f87eba54f576530fe2226c22b2b393f08a9c2642ed6e765c3"' :
                                            'id="xs-components-links-module-AppModule-38d836c9555a93b669be3dd38fa252a0d402338263d9f454d266d69ebdee49869eb1b8abf9b1a35f87eba54f576530fe2226c22b2b393f08a9c2642ed6e765c3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FooterModule-6cf11cfafd4945eda0d14a177bae77accdfaf7e5e5bc9e6b8ed7da7b22f012804bbbba0a804299d7b461ef035a069a7ef0e42f83ad650570b8d81e181510a823"' : 'data-bs-target="#xs-components-links-module-FooterModule-6cf11cfafd4945eda0d14a177bae77accdfaf7e5e5bc9e6b8ed7da7b22f012804bbbba0a804299d7b461ef035a069a7ef0e42f83ad650570b8d81e181510a823"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-6cf11cfafd4945eda0d14a177bae77accdfaf7e5e5bc9e6b8ed7da7b22f012804bbbba0a804299d7b461ef035a069a7ef0e42f83ad650570b8d81e181510a823"' :
                                            'id="xs-components-links-module-FooterModule-6cf11cfafd4945eda0d14a177bae77accdfaf7e5e5bc9e6b8ed7da7b22f012804bbbba0a804299d7b461ef035a069a7ef0e42f83ad650570b8d81e181510a823"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GameModule-4713d477f1d0b470fa83dde446a9aa3ed4b79306e73ec74bf4bcdebe7cf1e0a4b8c44f81aa4fa004bbec45dc944736104aa408643561f2758e3da0d8068d1484"' : 'data-bs-target="#xs-components-links-module-GameModule-4713d477f1d0b470fa83dde446a9aa3ed4b79306e73ec74bf4bcdebe7cf1e0a4b8c44f81aa4fa004bbec45dc944736104aa408643561f2758e3da0d8068d1484"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameModule-4713d477f1d0b470fa83dde446a9aa3ed4b79306e73ec74bf4bcdebe7cf1e0a4b8c44f81aa4fa004bbec45dc944736104aa408643561f2758e3da0d8068d1484"' :
                                            'id="xs-components-links-module-GameModule-4713d477f1d0b470fa83dde446a9aa3ed4b79306e73ec74bf4bcdebe7cf1e0a4b8c44f81aa4fa004bbec45dc944736104aa408643561f2758e3da0d8068d1484"' }>
                                            <li class="link">
                                                <a href="components/BoardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardElementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardElementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScoreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link" >HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeaderModule-2f2e74e899eb788f825ca33624d109f1d425c9543d9f5122db3db36b0a30b357b5f5b53d3fbc602131ea8d85d38810729be8284c63e2877461b53c839b1e0ad0"' : 'data-bs-target="#xs-components-links-module-HeaderModule-2f2e74e899eb788f825ca33624d109f1d425c9543d9f5122db3db36b0a30b357b5f5b53d3fbc602131ea8d85d38810729be8284c63e2877461b53c839b1e0ad0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-2f2e74e899eb788f825ca33624d109f1d425c9543d9f5122db3db36b0a30b357b5f5b53d3fbc602131ea8d85d38810729be8284c63e2877461b53c839b1e0ad0"' :
                                            'id="xs-components-links-module-HeaderModule-2f2e74e899eb788f825ca33624d109f1d425c9543d9f5122db3db36b0a30b357b5f5b53d3fbc602131ea8d85d38810729be8284c63e2877461b53c839b1e0ad0"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconModule.html" data-type="entity-link" >IconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-IconModule-0726c79a19e8b68c6768f234f25429b5fa36539971b95245c265b4150c943e6c1d744a566f65060ab1df634f44dc0b1fffa079e5cc0900c6dce0fdc47d430f30"' : 'data-bs-target="#xs-components-links-module-IconModule-0726c79a19e8b68c6768f234f25429b5fa36539971b95245c265b4150c943e6c1d744a566f65060ab1df634f44dc0b1fffa079e5cc0900c6dce0fdc47d430f30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconModule-0726c79a19e8b68c6768f234f25429b5fa36539971b95245c265b4150c943e6c1d744a566f65060ab1df634f44dc0b1fffa079e5cc0900c6dce0fdc47d430f30"' :
                                            'id="xs-components-links-module-IconModule-0726c79a19e8b68c6768f234f25429b5fa36539971b95245c265b4150c943e6c1d744a566f65060ab1df634f44dc0b1fffa079e5cc0900c6dce0fdc47d430f30"' }>
                                            <li class="link">
                                                <a href="components/IconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MainModule-074d33bd78c135aaf213a7b5546095f6d21260da41154c82744c838a43320d233ba7f2606a27175c72907286c5427b1f60829ab647b0bb1d8fb4a0adca28764b"' : 'data-bs-target="#xs-components-links-module-MainModule-074d33bd78c135aaf213a7b5546095f6d21260da41154c82744c838a43320d233ba7f2606a27175c72907286c5427b1f60829ab647b0bb1d8fb4a0adca28764b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-074d33bd78c135aaf213a7b5546095f6d21260da41154c82744c838a43320d233ba7f2606a27175c72907286c5427b1f60829ab647b0bb1d8fb4a0adca28764b"' :
                                            'id="xs-components-links-module-MainModule-074d33bd78c135aaf213a7b5546095f6d21260da41154c82744c838a43320d233ba7f2606a27175c72907286c5427b1f60829ab647b0bb1d8fb4a0adca28764b"' }>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MenuModule-130401f85ef2269be69e281cfdf0eb745a7d20bf5c7af265273d4b42e1b834fca727fd53ec2f110cdede2159654c1ed11f6c2349309079aa30090ef44c304446"' : 'data-bs-target="#xs-components-links-module-MenuModule-130401f85ef2269be69e281cfdf0eb745a7d20bf5c7af265273d4b42e1b834fca727fd53ec2f110cdede2159654c1ed11f6c2349309079aa30090ef44c304446"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-130401f85ef2269be69e281cfdf0eb745a7d20bf5c7af265273d4b42e1b834fca727fd53ec2f110cdede2159654c1ed11f6c2349309079aa30090ef44c304446"' :
                                            'id="xs-components-links-module-MenuModule-130401f85ef2269be69e281cfdf0eb745a7d20bf5c7af265273d4b42e1b834fca727fd53ec2f110cdede2159654c1ed11f6c2349309079aa30090ef44c304446"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuGameModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuGameModeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuSavesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuSavesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaveItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaveItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DeleteSaveEffect.html" data-type="entity-link" >DeleteSaveEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadSavesEffect.html" data-type="entity-link" >LoadSavesEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MainService.html" data-type="entity-link" >MainService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoveEffect.html" data-type="entity-link" >MoveEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewGameEffect.html" data-type="entity-link" >NewGameEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaveGameEffect.html" data-type="entity-link" >SaveGameEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendMessageEffect.html" data-type="entity-link" >SendMessageEffect</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppStateInterface.html" data-type="entity-link" >AppStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameInterface.html" data-type="entity-link" >GameInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameStateInterface.html" data-type="entity-link" >GameStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MainStateInterface.html" data-type="entity-link" >MainStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuStateInterface.html" data-type="entity-link" >MenuStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageInterface.html" data-type="entity-link" >MessageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewGameResponseInterface.html" data-type="entity-link" >NewGameResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaveInterface.html" data-type="entity-link" >SaveInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendMessageResponseInterface.html" data-type="entity-link" >SendMessageResponseInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});