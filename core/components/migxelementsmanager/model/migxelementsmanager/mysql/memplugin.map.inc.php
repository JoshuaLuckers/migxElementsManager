<?php
$xpdo_meta_map['memPlugin']= array (
  'package' => 'migxelementsmanager',
  'version' => NULL,
  'table' => 'mem_plugins',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'element_id' => 0,
    'package' => '',
    'static_path' => '',
    'exclude' => 0,
  ),
  'fieldMeta' => 
  array (
    'element_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
      'index' => 'index',
    ),
    'package' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'static_path' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'exclude' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
  ),
  'aggregates' => 
  array (
    'Element' => 
    array (
      'class' => 'modPlugin',
      'local' => 'element_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
