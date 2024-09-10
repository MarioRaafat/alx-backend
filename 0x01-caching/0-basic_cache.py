#!/usr/bin/python3
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache class that inherits from BaseCaching.
    
    This class is a basic caching system that allows adding and retrieving items 
    to/from a cache. The cache does not have a limit on the number of items it can hold.
    """

    def put(self, key, item):
        """
        Add an item in the cache.
        
        If the key or item is None, this method does nothing.
        
        Args:
            key (str): The key under which the item will be stored.
            item (Any): The item to be stored in the cache.
        """
        if key and item:
            self.cache_data[key] = item


    def get(self, key):
        """
        Get an item by key from the cache.
        
        If the key does not exist in the cache, returns None.
        
        Args:
            key (str): The key of the item to be retrieved.
        
        Returns:
            Any: The item stored in the cache for the given key, or None if the key does not exist.
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
