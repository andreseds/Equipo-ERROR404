import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public items: MenuItem[] = [];

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Inventory',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Products',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/products'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/product'
                            },
                        ]
                    },
                    {
                        label: 'Categories',
                        icon: 'pi pi-fw pi-calendar-plus',
                        items: [{
                            label: 'Search',
                            icon: 'pi pi-fw pi-calendar-plus',
                            routerLink: '/categories'
                        },
                        {
                            label: 'Create',
                            icon: 'pi pi-fw pi-calendar-minus',
                            routerLink: '/category'
                        }]
                    },
                    {
                        label: 'Suppliers',
                        icon: 'pi pi-fw pi-align-right',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/suppliers'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/supplier'
                            },

                        ]
                    }
                ]
            },
            {
                label: 'Sales',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Customers',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/customers'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/customer'
                            },

                        ]

                    },
                    {
                        label: 'Orders',
                        icon: 'pi pi-fw pi-user-minus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus'
                            },

                        ]
                    },
                    {
                        label: 'Invoices',
                        icon: 'pi pi-fw pi-user-minus'
                    }
                ]
            },
            {
                label: 'Meta',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Product Types',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/product-types'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/product-type'
                            },

                        ]
                    },
                    {
                        label: 'Product attributes',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/product-attributes'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/product-attribute'
                            },

                        ]
                    },
                    {
                        label: 'Product stores',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/product-stores'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/product-store'
                            },

                        ]
                    },
                    {
                        label: 'Order states',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/order-states'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/order-state'
                            },

                        ]
                    },
                    {
                        label: 'Locations',
                        icon: 'pi pi-fw pi-user-minus',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-calendar-plus',
                                routerLink: '/locations'
                            },
                            {
                                label: 'Create',
                                icon: 'pi pi-fw pi-calendar-minus',
                                routerLink: '/location'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Tools',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-pencil'
                    },
                    {
                        label: 'Reports',
                        icon: 'pi pi-fw pi-calendar-times'
                    },
                    {
                        label: 'Trash bin',
                        icon: 'pi pi-fw pi-calendar-times'
                    }
                ]
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
